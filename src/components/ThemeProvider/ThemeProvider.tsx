import React from 'react';
import defaultTheme from './defaultTheme';

interface Props {
  theme: any;
}

interface ThemeContextType {
  theme: any;
  getTheme: (string) => any;
}

const ThemeContext = React.createContext<ThemeContextType>(null);

const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  const themeMerged = {
    ...defaultTheme,
    ...theme,
  };

  const getTheme = (key: string): any => {
    return key
      .replace(/\[/g, '.')
      .replace(/\]/g, '')
      .split('.')
      .reduce((o, k) => (o || {})[k], themeMerged);
  };

  const contextValue = {
    theme: themeMerged,
    getTheme: getTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
};

export { ThemeContext, ThemeProvider, useTheme };
