import { useState } from 'react';

export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] => {
  const loadLocalStorage = () => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    else return defaultValue;
  };

  const [ls, setLs] = useState<T>(loadLocalStorage());

  const saveToLocalStorage = (data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
    setLs(data);
  };

  return [ls, saveToLocalStorage] as const;
};
