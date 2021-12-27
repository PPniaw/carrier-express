import type { AppProps } from 'next/app';
import splitbee from '@splitbee/web';

import { appWithTranslation } from 'next-i18next';

import { globalStyles } from '@utils/globalStyles';

function CarrierExpressLanding({ Component, pageProps }: AppProps) {
  globalStyles();
  splitbee.init();

  return <Component {...pageProps} />
}

export default appWithTranslation(CarrierExpressLanding);
