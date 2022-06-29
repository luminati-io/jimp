import { ImageCallback } from '@luminati-io/core';

interface Blur {
  blur(r: number, cb?: ImageCallback<this>): this;
}

export default function(): Blur;
