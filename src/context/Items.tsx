import { ReactNode, createContext, useState, useEffect } from 'react';
import { fetchItems } from '../utils';

type Item = {
  id: string;
  item_no: number;
  order_no: number;
  type: 'EDF' | 'CAO' | 'SFO';
};

export const ItemsContext = createContext<{
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}>({ items: [], setItems: () => {} });

export const ItemContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems<Item[]>('http://localhost:5173/data.json').then((data) =>
      setItems(data ?? [])
    );
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
