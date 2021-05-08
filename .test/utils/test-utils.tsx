import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UIStateProvider } from '../../components/UIStateProvider';
import { ThemeProvider } from '../../components/ThemeProvider';
import { IntlProvider } from 'react-intl';
import theme from '../../configs/theme.config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const languages = {
  th: require('../../translate/th.json'),
  en: require('../../translate/en.json'),
};

const MockProviders = ({ children }) => {
  const mocockLocale = 'th';
  const messages = languages[mocockLocale];

  return (
    <IntlProvider locale={mocockLocale} defaultLocale={mocockLocale} messages={messages}>
      <ThemeProvider theme={theme}>
        <UIStateProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </UIStateProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: MockProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, MockProviders };
