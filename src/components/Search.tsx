import { MouseEventHandler } from 'react';
import { useSearch } from '../hooks/useSearch';
import { useToggle } from '../hooks/useToggle';

const FilterIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
    />
  </svg>
);

const Search = () => {
  const { search, setSearch } = useSearch();
  const { isToggled, setIsToggled } = useToggle();

  const handleToggle: MouseEventHandler = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div className="flex justify-between search">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <div onClick={handleToggle}>
        <FilterIcon />
      </div>
    </div>
  );
};

export default Search;
