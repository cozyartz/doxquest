import type { APIRoute } from 'astro';
import { generateQRCode } from '../../../utils/qr';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const data = url.searchParams.get('data');

  if (!data) {
    return new Response(JSON.stringify({ error: 'Missing ?data=' }), { status: 400 });
  }

  const image = await generateQRCode(data);

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
