import { Jimp, ImageCallback } from '@luminati-io/core';

interface Displace {
  displace(map: Jimp, offset: number, cb?: ImageCallback<this>): this;
}

export default function(): Displace;
