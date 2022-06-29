import { ImageCallback } from '@luminati-io/core';

interface Dither {
  dither565(cb?: ImageCallback<this>): this;
  dither16(cb?: ImageCallback<this>): this;
}

export default function(): Dither;
