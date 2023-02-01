import { ReactNode, createContext, useState } from 'react';

export const SearchContext = createContext<{
  searchByTitle: string;
  setSearchByTitle: React.Dispatch<React.SetStateAction<string>>;
  searchByOrder: string;
  setSearchByOrder: React.Dispatch<React.SetStateAction<string>>;
  validateSearchByTitle: (value: string) => string;
}>({
  searchByTitle: '',
  setSearchByTitle: () => {},
  searchByOrder: '',
  setSearchByOrder: () => {},
  validateSearchByTitle: (value: string) => value,
});

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchByTitle, setSearchByTitle] = useState<string>('');
  const [searchByOrder, setSearchByOrder] = useState<string>('');

  const validateSearchByTitle = (searchByTitle: string) => {
    if (!searchByTitle.trim()) {
      return 'EMPTY';
    }

    if (!/^[\w\s.,]+$/.test(searchByTitle)) {
      return 'INVALID';
      // return 'v';
    }

    return '';
  };

  return (
    <SearchContext.Provider
      value={{
        searchByTitle,
        setSearchByTitle,
        searchByOrder,
        setSearchByOrder,
        validateSearchByTitle,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
