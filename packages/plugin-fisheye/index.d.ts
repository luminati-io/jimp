import { ImageCallback } from '@luminati-io/core';

interface Fisheye {
  fishEye(opts?: { r: number }, cb?: ImageCallback<this>): this;
  fishEye(cb?: ImageCallback<this>): this;
}

export default function(): Fisheye;
