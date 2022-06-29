import { mergeDeep } from 'timm';

import jpeg from '@luminati-io/jpeg';
import png from '@luminati-io/png';
import bmp from '@luminati-io/bmp';
import tiff from '@luminati-io/tiff';
import gif from '@luminati-io/gif';

export default () => mergeDeep(jpeg(), png(), bmp(), tiff(), gif());
