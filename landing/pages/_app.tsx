import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';

import { globalStyles } from '@utils/globalStyles';

function CarrierExpressLanding({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />
}

export default appWithTranslation(CarrierExpressLanding);
