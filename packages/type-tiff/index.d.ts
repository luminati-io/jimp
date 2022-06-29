import { DecoderFn, EncoderFn } from '@luminati-io/core';

interface Tiff {
  mime: { 'image/tiff': string[] }
  decoders: {
    'image/tiff': DecoderFn
  }
  encoders: {
    'image/tiff': EncoderFn
  }
  constants: {
    MIME_TIFF: 'image/tiff';
  }
}

export default function(): Tiff;
