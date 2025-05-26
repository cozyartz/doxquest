// src/pages/api/scan.ts
import type { APIRoute } from 'astro';
import { readQRCodeFromBuffer } from '../../utils/qr';
import { isNfcUidValid } from '../../utils/nfc';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();

  const file = form.get('file') as File | null;
  const uid = form.get('uid') as string | null;

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    try {
      const result = await readQRCodeFromBuffer(buffer);
      return new Response(JSON.stringify({ type: 'qr', result }), { status: 200 });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 400 });
    }
  }

  if (uid) {
    const valid = isNfcUidValid(uid);
    if (!valid) {
      return new Response(JSON.stringify({ error: 'Invalid or unrecognized NFC tag.' }), { status: 403 });
    }
    return new Response(JSON.stringify({ type: 'nfc', result: `Verified UID: ${uid}` }), { status: 200 });
  }

  return new Response(JSON.stringify({ error: 'No QR or NFC data provided.' }), { status: 400 });
};
