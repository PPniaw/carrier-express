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
      <Heading as="h1" loud={{ '@initial': 'mobile' }} purpose="mono" space="slogan" dangerouslySetInnerHTML={{__html: t('slogan.main')}} />
      <Heading as="span" loud="affix" dangerouslySetInnerHTML={{__html: t('slogan.affix')}} />
      <Hero />
      <section>
        <Heading as="h2" loud={{ '@initial': 'mobile' }} purpose="accent" space="slogan" dangerouslySetInnerHTML={{__html: t('section.billing.title')}} />
        <Heading as="span" loud="affix" dangerouslySetInnerHTML={{__html: t('section.billing.affix')}} />
        <Heading as="h2" moderate purpose="mono" dangerouslySetInnerHTML={{__html: t('section.appoint.title')}} />
        <Heading as="h2" loud={{ '@initial': 'mobile' }} purpose="mono" space="slogan" dangerouslySetInnerHTML={{__html: t('section.interested.title')}} />
      </section>
    </Container>
  )
}
