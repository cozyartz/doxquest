import type { APIRoute } from 'astro';
import { readQRCodeFromBuffer } from '../../../utils/qr';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const file = form.get('file') as File;

  if (!file) {
    return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    const result = await readQRCodeFromBuffer(buffer);
    return new Response(JSON.stringify({ result }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
