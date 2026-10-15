import { useState, useEffect } from 'react';

const resolveDefault = (defaultValue) =>
  typeof defaultValue === 'function' ? defaultValue() : defaultValue;

export const readStoredValue = (key, defaultValue) => {
  try {
    const stored = window.localStorage.getItem(key);
    return stored === null ? resolveDefault(defaultValue) : JSON.parse(stored);
  } catch {
    return resolveDefault(defaultValue);
  }
};

export const writeStoredValue = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return;
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => readStoredValue(key, defaultValue));

  useEffect(() => {
    writeStoredValue(key, value);
  }, [key, value]);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== key || event.newValue === null) return;
      try {
        setValue(JSON.parse(event.newValue));
      } catch {
        return;
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  return [value, setValue];
};
