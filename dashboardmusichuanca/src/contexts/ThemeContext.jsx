import { createContext, useCallback, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const THEME_STORAGE_KEY = 'musiccentro-theme';

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(THEME_STORAGE_KEY, getSystemTheme);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    return () => document.body.classList.remove('dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
