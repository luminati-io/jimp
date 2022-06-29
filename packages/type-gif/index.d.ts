import { DecoderFn } from '@luminati-io/core';

interface Gif {
  mime: {
    'image/gif': string[]
  }

  constants: {
    MIME_GIF: 'image/gif';
  }

  decoders: {
    'image/gif': DecoderFn
  }
}

export default function(): Gif;
