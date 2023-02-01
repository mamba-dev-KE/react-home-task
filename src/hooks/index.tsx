import { useContext } from 'react';
import { SearchContext } from '../context/Search';
import { ToggleContext } from '../context/Toggle';
import { ItemsContext } from '../context/Items';

export const useSearch = () => useContext(SearchContext);
export const useToggle = () => useContext(ToggleContext);
export const useItems = () => useContext(ItemsContext);
