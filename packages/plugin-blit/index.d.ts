import { Jimp, ImageCallback } from '@luminati-io/core';

interface Blit {
  blit(src: Jimp, x: number, y: number, cb?: ImageCallback<this>): this;
  blit(
    src: Jimp,
    x: number,
    y: number,
    srcx: number,
    srcy: number,
    srcw: number,
    srch: number,
    cb?: ImageCallback<this>
  ): this;
}

export default function(): Blit;
