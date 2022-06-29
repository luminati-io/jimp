import { ImageCallback, Jimp } from '@luminati-io/core';

interface Mask {
  mask(src: Jimp, x: number, y: number, cb?: ImageCallback<this>): this;
}

export default function(): Mask;
