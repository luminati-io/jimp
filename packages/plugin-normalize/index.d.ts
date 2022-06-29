import { ImageCallback } from '@luminati-io/core';

interface Normalize {
  normalize(cb ?: ImageCallback<this>): this;
}

export default function(): Normalize;
