import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { styled, globalCss } from 'stitches.config';

import HeadMeta from '@utils/HeadMeta';
import { Container } from '@components/layout';

import Header from '@components/Header';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=home]': {
    backgroundColor: 'hsl($shade120)'
  }
});

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

export default function Home() {
  const { t } = useTranslation('landing');

  useEffect(() => {
    document.body.setAttribute('data-body-style', 'home');
  });

  pageBody();

  return(
    <>
      <HeadMeta />
      <Header />
      <Container as="main" main={{ '@initial': 'mobile', '@m992': 'desktop' }}>
        <SloganMain responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} dangerouslySetInnerHTML={{__html: t('slogan.main')}} />
        <SloganAffix dangerouslySetInnerHTML={{__html: t('slogan.affix')}} />
      </Container>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale as string, ['landing'])
  },
});
