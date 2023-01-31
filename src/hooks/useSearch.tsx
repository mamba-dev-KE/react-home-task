import { ReactNode, createContext, useContext, useState } from 'react';

const SearchContext = createContext<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}>({ search: '', setSearch: () => {} });

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [search, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
