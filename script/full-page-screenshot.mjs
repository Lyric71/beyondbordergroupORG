// Captures a full-page screenshot of a URL by talking to a headless Chrome
// instance over the DevTools protocol. Used only as a dev helper.
import { spawn } from 'node:child_process';
import { createConnection } from 'node:net';
import { writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const TARGET_URL = process.argv[2] || 'http://127.0.0.1:4321/agencies/beyondbordergroup/';
const OUT = process.argv[3] || resolve(process.env.TEMP || '/tmp', 'fullpage.png');
const PORT = 9333;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const proc = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--window-size=1440,900',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=' + resolve(process.env.TEMP || '/tmp', 'cdp-profile-' + Date.now()),
  'about:blank',
], { stdio: 'ignore' });

const waitPort = async () => {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return;
    } catch {}
    await sleep(150);
  }
  throw new Error('Chrome did not open debugging port');
};
await waitPort();

const targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
const target = targets.find((t) => t.type === 'page') || targets[0];

const ws = await connectWs(target.webSocketDebuggerUrl);

let id = 0;
const pending = new Map();
ws.on('message', (data) => {
  const msg = JSON.parse(data.toString());
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});

const send = (method, params = {}) =>
  new Promise((res) => {
    const m = ++id;
    pending.set(m, res);
    ws.send(JSON.stringify({ id: m, method, params }));
  });

await send('Page.enable');
await send('Runtime.enable');
await send('Page.navigate', { url: TARGET_URL });
await sleep(3500);

// Get full page metrics
const layout = await send('Page.getLayoutMetrics');
const w = Math.ceil(layout.result.contentSize.width);
const h = Math.ceil(layout.result.contentSize.height);
console.log(`page size ${w}x${h}`);

// Scroll through the document so IntersectionObserver-driven reveals fire.
const stepPx = 700;
for (let y = 0; y <= h; y += stepPx) {
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})` });
  await sleep(220);
}
await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
await sleep(400);

const shot = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: true,
  clip: { x: 0, y: 0, width: w, height: h, scale: 1 },
});

const buf = Buffer.from(shot.result.data, 'base64');
await mkdir(resolve(OUT, '..'), { recursive: true });
await writeFile(OUT, buf);
console.log(`wrote ${OUT} (${(buf.length/1024).toFixed(0)}KB)`);

ws.close();
proc.kill();

async function connectWs(url) {
  // Minimal WS client (no deps): use node:http upgrade
  const u = new URL(url);
  const sock = createConnection({ host: u.hostname, port: Number(u.port) });
  await new Promise((res, rej) => { sock.once('connect', res); sock.once('error', rej); });
  const key = Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64');
  sock.write(
    `GET ${u.pathname}${u.search} HTTP/1.1\r\n` +
    `Host: ${u.host}\r\n` +
    `Upgrade: websocket\r\n` +
    `Connection: Upgrade\r\n` +
    `Sec-WebSocket-Key: ${key}\r\n` +
    `Sec-WebSocket-Version: 13\r\n\r\n`
  );
  // Read until \r\n\r\n
  let header = '';
  await new Promise((res) => {
    const onData = (chunk) => {
      header += chunk.toString('binary');
      if (header.includes('\r\n\r\n')) {
        sock.off('data', onData);
        res();
      }
    };
    sock.on('data', onData);
  });
  // Now we are in WS mode. Implement minimal frame parsing.
  let buf = Buffer.alloc(0);
  const listeners = { message: [], close: [] };
  sock.on('data', (chunk) => {
    buf = Buffer.concat([buf, chunk]);
    while (buf.length >= 2) {
      const fin = (buf[0] & 0x80) !== 0;
      const opcode = buf[0] & 0x0f;
      let len = buf[1] & 0x7f;
      let off = 2;
      if (len === 126) {
        if (buf.length < 4) break;
        len = buf.readUInt16BE(2);
        off = 4;
      } else if (len === 127) {
        if (buf.length < 10) break;
        const hi = buf.readUInt32BE(2);
        const lo = buf.readUInt32BE(6);
        len = hi * 2 ** 32 + lo;
        off = 10;
      }
      if (buf.length < off + len) break;
      const payload = buf.subarray(off, off + len);
      buf = buf.subarray(off + len);
      if (fin && (opcode === 1 || opcode === 2)) {
        listeners.message.forEach((cb) => cb(payload));
      } else if (opcode === 8) {
        listeners.close.forEach((cb) => cb());
      }
    }
  });
  return {
    on: (ev, cb) => listeners[ev]?.push(cb),
    send: (str) => {
      const data = Buffer.from(str, 'utf8');
      const len = data.length;
      const mask = crypto.getRandomValues(new Uint8Array(4));
      let head;
      if (len < 126) {
        head = Buffer.from([0x81, 0x80 | len]);
      } else if (len < 65536) {
        head = Buffer.alloc(4);
        head[0] = 0x81; head[1] = 0x80 | 126;
        head.writeUInt16BE(len, 2);
      } else {
        head = Buffer.alloc(10);
        head[0] = 0x81; head[1] = 0x80 | 127;
        head.writeBigUInt64BE(BigInt(len), 2);
      }
      const masked = Buffer.alloc(len);
      for (let i = 0; i < len; i++) masked[i] = data[i] ^ mask[i % 4];
      sock.write(Buffer.concat([head, Buffer.from(mask), masked]));
    },
    close: () => sock.destroy(),
  };
}
