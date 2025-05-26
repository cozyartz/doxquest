import QRCode from 'qrcode';
import Jimp from 'jimp';
import QrCodeReader from 'qrcode-reader';

/**
 * Generate QR Code from string (text, URL, etc.)
 */
export async function generateQRCode(data: string): Promise<string> {
  return await QRCode.toDataURL(data);
}

/**
 * Read QR code from image buffer
 */
export async function readQRCodeFromBuffer(buffer: Buffer): Promise<string> {
  const image = await Jimp.read(buffer);
  const qr = new QrCodeReader();

  return new Promise((resolve, reject) => {
    qr.callback = (err, value) => {
      if (err || !value) return reject(err || new Error('QR decode failed'));
      resolve(value.result);
    };
    qr.decode(image.bitmap);
  });
}
