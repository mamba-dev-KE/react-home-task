import { ReactNode, createContext, useState, useEffect } from 'react';
import { fetchItems } from '../utils';

export type Item = {
  id: string;
  item_no: number;
  order_no: number;
  type: 'EDF' | 'CAO' | 'SFO';
};

export const ItemsContext = createContext<{
  items?: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>;
  error: Error | null;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
}>({ items: [], setItems: () => {}, error: null, setError: () => {} });

export const ItemContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[] | undefined>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchItems<Item[]>('http://localhost:5173/data.json')
      .then((data) => setItems(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems, error, setError }}>
      {children}
    </ItemsContext.Provider>
  );
};
