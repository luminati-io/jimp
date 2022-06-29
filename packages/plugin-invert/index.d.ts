import { ImageCallback } from '@luminati-io/core';

interface Invert {
  invert(cb?: ImageCallback<this>): this;
}

export default function(): Invert;
