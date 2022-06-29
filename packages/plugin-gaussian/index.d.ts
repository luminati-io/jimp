import { ImageCallback } from '@luminati-io/core';

interface Gaussian {
  gaussian(r: number, cb?: ImageCallback<this>): this;
}

export default function(): Gaussian;
