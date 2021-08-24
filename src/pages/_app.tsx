import '@/styles/global.css';

import { AppProps } from 'next/app';
import React, { ReactElement, useEffect } from 'react';

import Swiper from '../libs/react-swiper';

Swiper.init();

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
