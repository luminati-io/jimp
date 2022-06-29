import { Jimp, mkJGD, getTestDir } from '@luminati-io/test-utils';
import configure from '@luminati-io/custom';
import resize from '@luminati-io/plugin-resize';
import blur from '@luminati-io/plugin-blur';

import shadow from '../src';

const jimp = configure({ plugins: [shadow, resize, blur] }, Jimp);

describe('Shadow', () => {
  it('creates a shadow', async () => {
    const expectedImg = await jimp.read(
      getTestDir(__dirname) + '/images/shadow.png'
    );
    const testImage = await jimp.read(
      mkJGD(
        '          ',
        '    ◆◆    ',
        '   ◆▦▦◆   ',
        '  ◆▦▦▦▦◆  ',
        '   ◆▦▦◆   ',
        '    ◆◆    ',
        '          '
      )
    );

    testImage
      .shadow({ x: -1, y: 1, blur: 1 })
      .bitmap.data.should.be.deepEqual(expectedImg.bitmap.data);
  });
});
