import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import { Container } from '@utils/layout';
import { Heading } from '@utils/typography';

const Hero = styled('figure', {
  margin: '0 0 $16'
});

export default function Main() {
  const { t } = useTranslation('landing');

  return(
    <Container as="main" main={{ '@initial': 'mobile', '@m992': 'desktop' }}>
      <Heading as="h1" slogan={{ '@initial': 'mobile', '@m768': 'tablet' }} purpose="mono" dangerouslySetInnerHTML={{__html: t('slogan.main')}} />
      <Heading as="span" slogan="affix" dangerouslySetInnerHTML={{__html: t('slogan.affix')}} />
      <Hero />
    </Container>
  )
}
