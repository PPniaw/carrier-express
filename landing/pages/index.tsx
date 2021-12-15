import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Image from 'next/image';

import { styled, globalCss } from 'stitches.config';

import HeadMeta from '@utils/HeadMeta';
import { Container } from '@components/layout';

const pageBody = globalCss({
  'body[data-body-style=home]': {
    paddingTop: '$12',
    backgroundColor: 'hsl($shade120)'
  }
});

const SloganMain = styled('h1', {
  margin: '0 0 $8',
  color: 'hsl($shade10)',
  fontFamily: '$default',
  fontSize: '3.2rem',
  lineHeight: '40px'
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
      <Container responsive={{ '@m768': 'max640', '@m1200': 'max1168' }}>
        <Image src="/logo.svg" width={144} height={40} alt="外出籠規畫" />
        <SloganMain dangerouslySetInnerHTML={{__html: t('slogan.main')}} />
        <SloganAffix dangerouslySetInnerHTML={{__html: t('slogan.affix')}} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale as string, ['landing'])
  },
});
