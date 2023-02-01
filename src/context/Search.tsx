import { ReactNode, createContext, useState } from 'react';

export const SearchContext = createContext<{
  searchByTitle: string;
  setSearchByTitle: React.Dispatch<React.SetStateAction<string>>;
  searchByOrder: string;
  setSearchByOrder: React.Dispatch<React.SetStateAction<string>>;
}>({
  searchByTitle: '',
  setSearchByTitle: () => {},
  searchByOrder: '',
  setSearchByOrder: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchByTitle, setSearchByTitle] = useState<string>('');
  const [searchByOrder, setSearchByOrder] = useState<string>('');

  return (
    <SearchContext.Provider
      value={{
        searchByTitle,
        setSearchByTitle,
        searchByOrder,
        setSearchByOrder,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
