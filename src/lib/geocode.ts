// src/utils/geocode.ts

import NodeGeocoder from 'node-geocoder';
import dotenv from 'dotenv';

// Load environment variables from `.env`
dotenv.config();

const apiKey = process.env.OPENCAGE_API_KEY;

if (!apiKey) {
  throw new Error('Missing OpenCage API key. Set OPENCAGE_API_KEY in your .env file.');
}

// Configure the geocoder
const geocoder = NodeGeocoder({
  provider: 'opencage',
  apiKey,
});

/**
 * Forward geocode: Convert a place/address to coordinates.
 */
export async function getCoordinates(address: string) {
  try {
    const res = await geocoder.geocode(address);
    if (!res.length) throw new Error('No results found for that address.');

    const { latitude, longitude } = res[0];
    return { lat: latitude, lng: longitude };
  } catch (err) {
    console.error('Error in getCoordinates:', err);
    throw err;
  }
}

/**
 * Reverse geocode: Convert coordinates to a human-readable address.
 */
export async function reverseCoordinates(lat: number, lng: number) {
  try {
    const res = await geocoder.reverse({ lat, lon: lng });
    if (!res.length) throw new Error('No results found for those coordinates.');

    return {
      formatted: res[0].formatted,
      city: res[0].city,
      country: res[0].country,
    };
  } catch (err) {
    console.error('Error in reverseCoordinates:', err);
    throw err;
  }
}
