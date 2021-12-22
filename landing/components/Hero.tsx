import Image from 'next/image';
import { screenMobile, screenTablet } from '@utils/screens';

import { styled } from 'stitches.config';

const Figure = styled('figure', {
  overflow: 'hidden',
  padding: 0,
  borderRadius: '12px',

  variants: {
    screenshot: {
      mobile: {
        margin: 0,
        border: '1px solid hsl($shade60)'
      },
      tablet: {
        maxWidth: '768px',
        margin: '0 auto',
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
          <Image layout="responsive" width={375} height={812} src="/hero/mobile.webp" alt="Demo of Mobile Screen" />
        }
        {
          screenTablet &&
          <Image layout="responsive" width={35} height={23} src="/hero/tablet.webp" alt="Demo of Tablet Screen" />
        }
      </Figure>
    </>
  )
}
