import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { globalCss } from 'stitches.config';

import HeadMeta from '@utils/HeadMeta';

import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';

export default function Home() {
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
