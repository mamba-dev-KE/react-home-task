import { ReactNode, createContext, useState, useEffect } from 'react';
import { fetchItems } from '../utils';

export const ItemsContext = createContext<{
  items: string[];
}>({ items: [] });

export const ItemContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    fetchItems('http://localhost:5173/data.json').then(setItems);
  }, []);

  return (
    <ItemsContext.Provider value={{ items }}>{children}</ItemsContext.Provider>
  );
};
