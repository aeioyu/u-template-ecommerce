import React from 'react';
import { ThemeContext } from '@/components/ThemeProvider';

function useTheme() {
  const { theme, getTheme } = React.useContext(ThemeContext);
  return {
    theme,
    getTheme,
  };
}

export default useTheme;
