import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HeadMeta from '@utils/HeadMeta';

import Header from '@components/Header';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

export default function ContactPage() {
  return(
  <>
    <HeadMeta />
    <Header />
    <Contact />
    <Footer />
  </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale as string, ['landing'])
  },
});
