import { useContext } from 'react';
import { SearchContext } from '../context/Search';

export const useSearch = () => useContext(SearchContext);
