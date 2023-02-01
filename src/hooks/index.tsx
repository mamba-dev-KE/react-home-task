import { useContext } from 'react';
import { SearchContext } from '../context/Search';
import { ToggleContext } from '../context/Toggle';

export const useSearch = () => useContext(SearchContext);
export const useToggle = () => useContext(ToggleContext);
