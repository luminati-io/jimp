import { mergeDeep } from 'timm';

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

const plugins = [
  blit,
  blur,
  circle,
  color,
  contain,
  cover,
  crop,
  displace,
  dither,
  fisheye,
  flip,
  gaussian,
  invert,
  mask,
  normalize,
  print,
  resize,
  rotate,
  scale,
  shadow,
  threshold
];

export default jimpEvChange => {
  const initializedPlugins = plugins.map(pluginModule => {
    let plugin = pluginModule(jimpEvChange) || {};

    if (!plugin.class && !plugin.constants) {
      // Default to class function
      plugin = { class: plugin };
    }

    return plugin;
  });

  return mergeDeep(...initializedPlugins);
};
