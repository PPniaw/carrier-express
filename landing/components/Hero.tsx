import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import mobile from '/public/hero/mobile.webp';
import tablet from '/public/hero/tablet.webp';

const Figure = styled('figure', {
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  borderRadius: '12px',

  variants: {
    display: {
      none: {
        display: 'none'
      },
      block: {
        display: 'block'
      }
    },
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
  const { t } = useTranslation('landing');

  return(
    <>
      <Figure screenshot={{ '@initial': 'mobile', '@m768': 'tablet' }} display={{ '@m768': 'none' }}>
        <Image layout="responsive" src={mobile} quality={92} alt={t('hero.mobile')} />
      </Figure>
      <Figure screenshot={{ '@initial': 'mobile', '@m768': 'tablet' }}  display={{ '@initial': 'none', '@m768': 'block' }}>
        <Image layout="responsive" src={tablet} quality={92} alt={t('hero.tablet')} />
      </Figure>
    </>
  )
}
