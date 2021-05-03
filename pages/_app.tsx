import '@/styles/global.css';
import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@/components/ThemeProvider';
import theme from '@/configs/theme.config';
import SwiperCore, { Lazy, Pagination, Navigation, Autoplay } from 'swiper/core';
import { UIStateProvider } from '@/components/UIStateProvider';

SwiperCore.use([Lazy, Pagination, Navigation, Autoplay]);

const languages = {
  th: require('../translate/th.json'),
  en: require('../translate/en.json'),
};

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = languages[locale];

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      <ThemeProvider theme={theme}>
        <UIStateProvider>
          <Component {...pageProps} />
        </UIStateProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default MyApp;
