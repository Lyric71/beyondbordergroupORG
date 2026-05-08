import type { APIRoute } from 'astro';

export const prerender = false;

const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';
const POLL_INTERVAL_MS = 1000;
const POLL_MAX_ATTEMPTS = 60;

type SubmitResponse = {
  code?: number;
  message?: string;
  data?: { id?: string };
};

type PollResponse = {
  data?: {
    status?: 'completed' | 'processing' | 'failed';
    outputs?: string[];
    timings?: unknown;
    error?: string;
  };
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.WAVESPEED_API_KEY;
  if (!apiKey) return json(500, { error: 'WAVESPEED_API_KEY not configured.' });

  let prompt: unknown;
  try {
    ({ prompt } = await request.json());
  } catch {
    return json(400, { error: 'Invalid JSON body.' });
  }

  if (typeof prompt !== 'string' || !prompt.trim()) {
    return json(400, { error: 'Prompt is required.' });
  }

  const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt.trim(),
      output_format: 'png',
      quality: '1K',
    }),
  });

  const submitData = (await submitRes.json()) as SubmitResponse;
  if (submitData.code !== 200 || !submitData.data?.id) {
    return json(502, {
      error: submitData.message ?? 'Failed to submit generation task.',
    });
  }

  const taskId = submitData.data.id;

  for (let i = 0; i < POLL_MAX_ATTEMPTS; i++) {
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));

    const statusRes = await fetch(
      `${WAVESPEED_API_URL}/predictions/${taskId}/result`,
      { headers: { Authorization: `Bearer ${apiKey}` } },
    );

    const statusData = (await statusRes.json()) as PollResponse;
    const status = statusData.data?.status;

    if (status === 'completed') {
      const imageUrl = statusData.data?.outputs?.[0];
      if (!imageUrl) {
        return json(502, { error: 'Generation completed without an output URL.' });
      }
      return json(200, {
        success: true,
        imageUrl,
        timings: statusData.data?.timings,
      });
    }

    if (status === 'failed') {
      return json(502, {
        error: statusData.data?.error ?? 'Image generation failed.',
      });
    }
  }

  return json(504, { error: 'Image generation timed out (60s).' });
};
