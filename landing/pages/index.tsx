import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import HeadMeta from '@utils/HeadMeta';
import { Container } from '@components/layout';

export default function Home() {
  const { t } = useTranslation('landing');

  return(
    <>
      <HeadMeta />
      <Container responsive={{ '@m768': 'max640', '@m1200': 'max1168' }}>
        Carrier Express
        {t('link.home')}
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['landing']),
  },
});
