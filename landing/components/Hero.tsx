import Image from 'next/image';
import { screenMobile, screenTablet } from '@utils/screens';

import { styled } from 'stitches.config';

import mobile from '/public/hero/mobile.webp';
import tablet from '/public/hero/tablet.webp';

const Figure = styled('figure', {
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  borderRadius: '12px',

  variants: {
    screenshot: {
      mobile: {
        border: '1px solid hsl($shade60)'
      },
      tablet: {
        borderColor: 'transparent'
      }
    }
  }
});

export default function Hero() {
  return(
    <>
      <Figure screenshot={{ '@initial': 'mobile', '@m768': 'tablet' }}>
        {
          screenMobile &&
          <Image layout="responsive" src={mobile} quality={92} alt="Demo of Mobile Screen" />
        }
        {
          screenTablet &&
          <Image layout="responsive" src={tablet} quality={92} alt="Demo of Tablet Screen" />
        }
      </Figure>
    </>
  )
}
