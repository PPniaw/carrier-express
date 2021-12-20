import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';

import { Container, Section, ListItem } from '@utils/layout';
import { Heading } from '@utils/typography';

const Hero = styled('figure', {
  margin: '0 0 $16'
});

const AppointsList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(auto-fit, minmax(200px, 1fr))',
  margin: 0,
  padding: 0,

  variants: {
    responsive: {
      mobile: {
        gap: '$16 0'
      },
      tablet: {
        gap: '0 $16'
      }
    }
  }
});

const AppointItem = styled(ListItem, {
  variants: {
    alignright: {
      mobile: {
        justifySelf: 'end'
      },
      tablet: {
        justifySelf: 'unset'
      }
    }
  }
});

const AppointIcon = styled('img', {
  display: 'block'
});

export default function Main() {
  const { t } = useTranslation('landing');

  const iconCoin = '/appoints/iconCoin.svg';
  const iconDetour = '/appoints/iconDetour.svg';
  const icon12Plus = '/appoints/icon12Plus.svg';

  const AppointItems = [{
      icon: iconCoin,
      title: t('section.appoint.items.first.title'),
      alignRight: false
    }, {
      icon: iconDetour,
      title: t('section.appoint.items.second.title'),
      alignRight: true
    }, {
      icon: icon12Plus,
      title: t('section.appoint.items.third.title'),
      alignRight: false
    }
  ];

  return(
    <Container as="main" main={{ '@initial': 'mobile', '@m992': 'desktop' }}>
      <Section position="hasSiblings" purpose="aboveTheFold">
        <Heading as="h1" loud={{ '@initial': 'mobile' }} accent="heavy" space="slogan" dangerouslySetInnerHTML={{__html: t('slogan.main')}} />
        <Heading as="span" loud="affix" dangerouslySetInnerHTML={{__html: t('slogan.affix')}} />
        <Hero />
      </Section>
      <Section position="hasSiblings">
        <Heading as="h2" loud={{ '@initial': 'mobile' }} accent="identity" space="slogan" dangerouslySetInnerHTML={{__html: t('section.billing.title')}} />
        <Heading as="span" loud="affix" dangerouslySetInnerHTML={{__html: t('section.billing.affix')}} />
        <Heading as="span" moderate accent="light" dangerouslySetInnerHTML={{__html: t('section.billing.compare')}} />
      </Section>
      <Section>
        <Heading as="h2" moderate accent="heavy" dangerouslySetInnerHTML={{__html: t('section.appoint.title')}} />
        <AppointsList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
          {
            AppointItems.map(({ icon, title, alignRight }, index) => (
              <AppointItem nomark key={`appoint-${index}`}
                alignright={{ '@initial': alignRight ? 'mobile' : undefined, '@m768': alignRight ? 'tablet' : undefined }}
              >
                <AppointIcon src={icon} loading="lazy" />
                <Heading as="strong" lowered accent="light" dangerouslySetInnerHTML={{__html: title}} />
              </AppointItem>
            ))
          }
        </AppointsList>
      </Section>
      {/* <section>
        <Heading as="h2" loud={{ '@initial': 'mobile' }} accent="heavy" space="slogan" dangerouslySetInnerHTML={{__html: t('section.interested.title')}} />
      </section> */}
    </Container>
  )
}
