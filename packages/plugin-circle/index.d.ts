import { ImageCallback } from '@luminati-io/core';

interface Circle {
  circle(options?: {
    radius: number,
    x: number,
    y: number
  }, cb?: ImageCallback<this>): this;
  circle(cb?: ImageCallback<this>): this;
}

export default function(): Circle;
