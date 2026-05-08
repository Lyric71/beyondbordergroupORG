export { renderers } from '../../renderers.mjs';

const prerender = false;
const WAVESPEED_API_URL = "https://api.wavespeed.ai/api/v3";
const MODEL = "google/nano-banana-2/text-to-image";
const POLL_INTERVAL_MS = 1e3;
const POLL_MAX_ATTEMPTS = 60;
const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json" }
});
const POST = async ({ request }) => {
  const apiKey = "42f578ab370acc8874fe83ece8cbf48ea7d236f0726b67f706d690545ca22b4e";
  let prompt;
  try {
    ({ prompt } = await request.json());
  } catch {
    return json(400, { error: "Invalid JSON body." });
  }
  if (typeof prompt !== "string" || !prompt.trim()) {
    return json(400, { error: "Prompt is required." });
  }
  const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: prompt.trim(),
      output_format: "png",
      quality: "1K"
    })
  });
  const submitData = await submitRes.json();
  if (submitData.code !== 200 || !submitData.data?.id) {
    return json(502, {
      error: submitData.message ?? "Failed to submit generation task."
    });
  }
  const taskId = submitData.data.id;
  for (let i = 0; i < POLL_MAX_ATTEMPTS; i++) {
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
    const statusRes = await fetch(
      `${WAVESPEED_API_URL}/predictions/${taskId}/result`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    const statusData = await statusRes.json();
    const status = statusData.data?.status;
    if (status === "completed") {
      const imageUrl = statusData.data?.outputs?.[0];
      if (!imageUrl) {
        return json(502, { error: "Generation completed without an output URL." });
      }
      return json(200, {
        success: true,
        imageUrl,
        timings: statusData.data?.timings
      });
    }
    if (status === "failed") {
      return json(502, {
        error: statusData.data?.error ?? "Image generation failed."
      });
    }
  }
  return json(504, { error: "Image generation timed out (60s)." });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
