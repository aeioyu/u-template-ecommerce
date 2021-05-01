import '@/styles/global.css';
import { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@/components/ThemeProvider';
import theme from '@/configs/theme.config';

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
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
};

export default MyApp;
