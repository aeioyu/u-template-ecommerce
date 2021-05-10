import '@/styles/global.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import React, { ReactElement, useEffect } from 'react';
import { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@/components/ThemeProvider';
import { UIStateProvider } from '@/components/UIStateProvider';
import theme from '@/configs/theme.config';
import { useRouter } from 'next/router';
import { Hydrate } from 'react-query/hydration';
import { GlobalStyles } from 'twin.macro';
import { css } from '@emotion/react';
import { Global } from '@emotion/core';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Pagination, Navigation, Autoplay]);

export const globalStyles = css`
  ${require('swiper/swiper.min.css')}
  ${require('swiper/components/lazy/lazy.min.css')}
  ${require('swiper/components/pagination/pagination.min.css')}
  ${require('swiper/components/navigation/navigation.min.css')}
`;

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
            <Hydrate state={pageProps.dehydratedState}>
              <Layout {...pageProps}>
                <GlobalStyles />
                <Global styles={globalStyles} />
                <Component {...pageProps} />
              </Layout>
            </Hydrate>
          </QueryClientProvider>
        </UIStateProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default MyApp;
