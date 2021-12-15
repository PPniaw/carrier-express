import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';

import { globalStyles } from '@utils/globalStyles';

function CarrierExpressLandingApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />
}

export default appWithTranslation(CarrierExpressLandingApp);
