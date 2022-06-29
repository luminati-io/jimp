import { ImageCallback } from '@luminati-io/core';

interface Rotate {
  rotate(deg: number, cb?: ImageCallback<this>): this;
  rotate(deg: number, mode: string | boolean, cb?: ImageCallback<this>): this;
}

export default function(): Rotate;
