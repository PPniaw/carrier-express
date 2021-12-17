import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import { Container } from '@components/layout';

const SloganMain = styled('h1', {
  margin: '0 0 $8',
  color: 'hsl($shade10)',
  fontFamily: '$default',

  variants: {
    responsive: {
      mobile: {
        fontSize: '3.2rem',
        lineHeight: '40px',
      },
      tablet: {
        fontSize: '4.8rem',
        lineHeight: '56px',
      }
    }
  }
});

const SloganAffix = styled('span', {
  color: 'hsl($shade30)',
  fontFamily: '$default',
  fontSize: '2rem'
});

const Hero = styled('figure', {
  margin: '0 0 $16'
});

export default function Main() {
  const { t } = useTranslation('landing');

  return(
    <Container as="main" main={{ '@initial': 'mobile', '@m992': 'desktop' }}>
      <SloganMain responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: t('slogan.main')}} />
      <SloganAffix dangerouslySetInnerHTML={{__html: t('slogan.affix')}} />
      <Hero />
    </Container>
  )
}
