import jpeg from '@luminati-io/jpeg';
import png from '@luminati-io/png';
import bmp from '@luminati-io/bmp';
import tiff from '@luminati-io/tiff';
import gif from '@luminati-io/gif';

type JpegRet = ReturnType<typeof jpeg>
type PngRet = ReturnType<typeof png>
type BmpRet = ReturnType<typeof bmp>
type TiffRet = ReturnType<typeof tiff>
type GifRet = ReturnType<typeof gif>

/**
 * This is made union and not intersection to avoid issues with
 * `IllformedPlugin` and `WellFormedPlugin` when using typings with Jimp
 * generic
 *
 * In reality, this should be an intersection but our type data isn't
 * clever enough to figure out what's a class and what's not/etc
 */
type Types = JpegRet |
  PngRet |
  BmpRet |
  TiffRet |
  GifRet

export default function(): Types;
