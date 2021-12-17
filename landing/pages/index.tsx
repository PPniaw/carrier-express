import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalCss } from 'stitches.config';

import HeadMeta from '@utils/HeadMeta';

import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';

const pageBody = globalCss({
  'body[data-body-style=home]': {
    backgroundColor: 'hsl($shade120)'
  }
});

export default function Home() {
  useEffect(() => {
    document.body.setAttribute('data-body-style', 'home');
  });

  pageBody();

  return(
    <>
      <HeadMeta />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale as string, ['landing'])
  },
});
