const sharp=require('sharp');const fs=require('fs');
const ICON=fs.readFileSync('_icon_block.txt','utf8');
const NAVY='rgb(7,39,94)',CYAN='rgb(0,161,233)',RED='rgb(206,17,38)',GREY='rgb(120,132,145)';
const A="Arial, 'Helvetica Neue', Helvetica, sans-serif";
const X=720;

// helper to build a one-line wordmark from segments [{t,weight,fill,style}]
function line(segs, fs, y, ls){
  let inner = segs.map((s,i)=>{
    const xa = i===0 ? ` x="${X}"` : '';
    const st = s.style?` font-style="${s.style}"`:'';
    return `<tspan${xa} y="${y}" font-weight="${s.w}"${st} style="fill:${s.f};">${s.t}</tspan>`;
  }).join('');
  return `  <text font-family="${A}" font-size="${fs}" letter-spacing="${ls}">${inner}</text>`;
}
function stacked(l1segs,l2segs,fs,y1,y2,ls){
  const mk=(segs,y)=>segs.map((s,i)=>`<tspan${i===0?` x="${X}"`:''} y="${y}" font-weight="${s.w}" style="fill:${s.f};">${s.t}</tspan>`).join('');
  return `  <text font-family="${A}" font-size="${fs}" letter-spacing="${ls}">${mk(l1segs,y1)}${mk(l2segs,y2)}</text>`;
}

// balanced horizontal metrics
const FS=430,YH=391,LS=-6;
const OPTS={
 // The (grey) China (navy bold) Path (cyan light)
 O1: line([{t:'The',w:600,f:GREY},{t:'China',w:700,f:NAVY},{t:'Path',w:400,f:CYAN}],FS,YH,LS),
 // China navy + Path red (China-red accent)
 O2: line([{t:'China',w:700,f:NAVY},{t:'Path',w:400,f:RED}],FS,YH,LS),
 // ChinaPath two-tone (no The): China navy + Path cyan
 O3: line([{t:'China',w:700,f:NAVY},{t:'Path',w:400,f:CYAN}],FS,YH,LS),
 // China red bold + Path navy bold
 O4: line([{t:'China',w:700,f:RED},{t:'Path',w:700,f:NAVY}],FS,YH,LS),
 // All navy, Path cyan, with The italic prefix
 O5: line([{t:'the',w:400,f:GREY,style:'italic'},{t:'ChinaPath',w:700,f:NAVY}],FS,YH,LS),
 // Stacked: "The China" (navy) / "Path" (cyan light)
 O6: stacked([{t:'The ',w:600,f:GREY},{t:'China',w:700,f:NAVY}],[{t:'Path',w:400,f:CYAN}],318,228,489,LS),
};

const svg=(w,b)=>`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="100%" height="100%" viewBox="0 0 ${w} 563" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;">
${ICON}
${b}
</svg>
`;
async function mR(b){const W0=4800;
 const png=await sharp(Buffer.from(svg(W0,b)),{density:100}).png().toBuffer();
 const {data,info}=await sharp(png).ensureAlpha().raw().toBuffer({resolveWithObject:true});
 let mx=0;const{width:W,height:H,channels:ch}=info;
 for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(data[(y*W+x)*ch+3]>20&&x>mx)mx=x;}
 return (mx/W)*W0;}
(async()=>{for(const[n,b]of Object.entries(OPTS)){
 const r=await mR(b);const w=Math.round(r+60);
 const out=svg(w,b);fs.writeFileSync(`_opt_${n}.svg`,out);
 await sharp(Buffer.from(out),{density:120}).png().toFile(`C:/tmp/opt_${n}.png`);
 console.log(n,'w=',w);
}})();
