import Image from 'next/image';
import { screenMobile, screenTablet } from '@utils/screens';

import { styled } from 'stitches.config';

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
          <Image layout="responsive" width={375} height={812} src="/hero/mobile.webp" alt="Demo of Mobile Screen" />
        }
        {
          screenTablet &&
          <Image layout="responsive" width={175} height={72} src="/hero/tablet.webp" alt="Demo of Tablet Screen" />
        }
      </Figure>
    </>
  )
}
