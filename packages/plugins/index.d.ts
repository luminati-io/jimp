import blit from '@luminati-io/plugin-blit';
import blur from '@luminati-io/plugin-blur';
import circle from '@luminati-io/plugin-circle';
import color from '@luminati-io/plugin-color';
import contain from '@luminati-io/plugin-contain';
import cover from '@luminati-io/plugin-cover';
import crop from '@luminati-io/plugin-crop';
import displace from '@luminati-io/plugin-displace';
import dither from '@luminati-io/plugin-dither';
import fisheye from '@luminati-io/plugin-fisheye';
import flip from '@luminati-io/plugin-flip';
import gaussian from '@luminati-io/plugin-gaussian';
import invert from '@luminati-io/plugin-invert';
import mask from '@luminati-io/plugin-mask';
import normalize from '@luminati-io/plugin-normalize';
import print from '@luminati-io/plugin-print';
import resize from '@luminati-io/plugin-resize';
import rotate from '@luminati-io/plugin-rotate';
import scale from '@luminati-io/plugin-scale';
import shadow from '@luminati-io/plugin-shadow';
import threshold from '@luminati-io/plugin-threshold';

type BlitRet = ReturnType<typeof blit>;
type BlurRet = ReturnType<typeof blur>;
type CircleRet = ReturnType<typeof circle>;
type ColorRet = ReturnType<typeof color>;
type ContainRet = ReturnType<typeof contain>;
type CoverRet = ReturnType<typeof cover>;
type CropRet = ReturnType<typeof crop>;
type DisplaceRet = ReturnType<typeof displace>;
type DitherRet = ReturnType<typeof dither>;
type FlipRet = ReturnType<typeof flip>;
type FisheyeRet = ReturnType<typeof fisheye>;
type GaussianRet = ReturnType<typeof gaussian>;
type InvertRet = ReturnType<typeof invert>;
type MaskRet = ReturnType<typeof mask>;
type NormalizeRet = ReturnType<typeof normalize>;
type PrintRet = ReturnType<typeof print>;
type ResizeRet = ReturnType<typeof resize>;
type RotateRet = ReturnType<typeof rotate>;
type ScaleRet = ReturnType<typeof scale>;
type ShadowRet = ReturnType<typeof shadow>;
type ThresholdRet = ReturnType<typeof threshold>;

/**
 * This is made union and not intersection to avoid issues with
 * `IllformedPlugin` and `WellFormedPlugin` when using typings with Jimp
 * generic
 *
 * In reality, this should be an intersection but our type data isn't
 * clever enough to figure out what's a class and what's not/etc
 */
type Plugins =
  | BlitRet
  | BlurRet
  | CircleRet
  | ColorRet
  | ContainRet
  | CoverRet
  | CropRet
  | DisplaceRet
  | DitherRet
  | FlipRet
  | FisheyeRet
  | GaussianRet
  | InvertRet
  | MaskRet
  | NormalizeRet
  | PrintRet
  | ResizeRet
  | RotateRet
  | ScaleRet
  | ShadowRet
  | ThresholdRet;

export default function(): Plugins;
