import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { styled } from 'stitches.config';
import { Container, Section, ListItem } from '@utils/layout';
import { Heading } from '@utils/typography';
import Hero from '@components/Hero';
import MailingList from './MailingList';

const ComparedList = styled('ul', {
  display: 'grid',
  rowGap: '32px',
  margin: 0,
  padding: 0
});

const CompareItem = styled(ListItem, {
  variants: {
    responsive: {
      tablet: {
        display: 'grid',
        grid: 'auto / minmax(450px, max-content) 1fr'
      }
    }
  }
});

const CompareImage = styled(Image, {
  borderRadius: '12px'
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
  display: 'block',
  size: '$48'
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
    <Container as="main" main={{ '@initial': 'mobile', '@m1200': 'desktop' }}>
      <Section position="hasSiblings">
        <Heading as="h1" loud={{ '@initial': 'mobile' }} accent="heavy" space="slogan" dangerouslySetInnerHTML={{__html: t('slogan.main')}} />
        <Heading as="span" loud="affix" space="loweredTitle" dangerouslySetInnerHTML={{__html: t('slogan.affix')}} />
        <Hero />
      </Section>
      <Section position="hasSiblings">
        <Heading as="h2" loud={{ '@initial': 'mobile' }} accent="identity" space="slogan" dangerouslySetInnerHTML={{__html: t('section.billing.title')}} />
        <ComparedList>
          <CompareItem nomark responsive={{ '@m768': 'tablet' }}>
            <Heading as="strong" loud="affix" space="loweredTitle" dangerouslySetInnerHTML={{__html: t('section.billing.affix')}} />
            <CompareImage src="/compare/screenshotMail.jpg" width={2} height={1} layout="responsive" quality={92} alt="" />
          </CompareItem>
          <CompareItem nomark responsive={{ '@m768': 'tablet' }}>
            <Heading as="strong" moderate accent="light" space="loweredTitle" dangerouslySetInnerHTML={{__html: t('section.billing.compare')}} />
            <CompareImage src="/compare/screenshotGCal.jpg" width={2} height={1} layout="responsive" quality={92} alt="" />
          </CompareItem>
        </ComparedList>
      </Section>
      <Section position="hasSiblings">
        <Heading as="h2" moderate accent="heavy" dangerouslySetInnerHTML={{__html: t('section.appoint.title')}} />
        <AppointsList responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
          {
            AppointItems.map(({ icon, title, alignRight }, index) => (
              <AppointItem nomark key={`appoint-${index}`}
                alignright={{ '@initial': alignRight ? 'mobile' : undefined, '@m768': alignRight ? 'tablet' : undefined }}
              >
                <AppointIcon src={icon} loading="lazy" alt="" />
                <Heading as="strong" lowered accent="light" dangerouslySetInnerHTML={{__html: title}} />
              </AppointItem>
            ))
          }
        </AppointsList>
      </Section>
      <Section>
        <Heading as="h2" loud={{ '@initial': 'mobile' }} accent="heavy" space="slogan" dangerouslySetInnerHTML={{__html: t('section.interested.title')}} />
        <Heading as="strong" loud="affix" space="loweredTitle" dangerouslySetInnerHTML={{__html: t('section.interested.affix')}} />
        <MailingList />
      </Section>
    </Container>
  )
}
