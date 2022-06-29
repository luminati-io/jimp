import { Jimp, getTestDir } from '@luminati-io/test-utils';
import configure from '@luminati-io/custom';
import jpeg from '@luminati-io/jpeg';
import color from '@luminati-io/plugin-color';
import resize from '@luminati-io/plugin-resize';

import threshold from '../src';

const jimp = configure(
  { types: [jpeg], plugins: [threshold, color, resize] },
  Jimp
);

describe('Threshold', function() {
  this.timeout(15000);

  it('defines default threshold for lighter backgrounds', async () => {
    const expectedImage = await jimp.read(
      getTestDir(__dirname) + '/images/hands_mx200_rp255.jpg'
    );
    const testImage = await jimp.read(
      getTestDir(__dirname) + '/images/hands.jpg'
    );

    testImage
      .threshold({ max: 200, replace: 255 })
      .hash()
      .should.be.equal(expectedImage.hash());
  });
});
