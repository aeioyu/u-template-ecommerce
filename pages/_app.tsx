import '@/styles/global.css';
import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import React, { ReactElement, useEffect } from 'react';
import SwiperCore, { Autoplay, Lazy, Navigation, Pagination } from 'swiper/core';

import { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@/components/ThemeProvider';
import { UIStateProvider } from '@/components/UIStateProvider';
import theme from '@/configs/theme.config';
import { useRouter } from 'next/router';
import { Hydrate } from 'react-query/hydration';

SwiperCore.use([Lazy, Pagination, Navigation, Autoplay]);

const languages = {
  th: require('../translate/th.json'),
  en: require('../translate/en.json'),
};

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 2,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

const Noop: React.FC = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const Layout = (Component as any).Layout || Noop;
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = languages[locale];

  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    (queryClientRef.current as any) = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 2,
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      <ThemeProvider theme={theme}>
        <UIStateProvider>
          <QueryClientProvider client={queryClientRef.current}>
            <Layout {...pageProps}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </Layout>
          </QueryClientProvider>
        </UIStateProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default MyApp;
