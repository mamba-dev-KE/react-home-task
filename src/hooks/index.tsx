import { useContext } from 'react';
import { SearchContext, ToggleContext, ItemsContext, CheckedContext } from '../context';

export const useSearch = () => useContext(SearchContext);
export const useToggle = () => useContext(ToggleContext);
export const useItems = () => useContext(ItemsContext);
export const useChecked = () => useContext(CheckedContext);
