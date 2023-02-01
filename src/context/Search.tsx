import { ReactNode, createContext, useState } from 'react';

export const SearchContext = createContext<{
  searchByTitle: string;
  setSearchByTitle: React.Dispatch<React.SetStateAction<string>>;
}>({ searchByTitle: '', setSearchByTitle: () => {} });

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchByTitle, setSearchByTitle] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchByTitle, setSearchByTitle }}>
      {children}
    </SearchContext.Provider>
  );
};
