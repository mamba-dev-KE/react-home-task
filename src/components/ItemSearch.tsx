import { useSearch, useToggle } from '../hooks';

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
  const { searchByTitle, setSearchByTitle } = useSearch();
  const { toggle } = useToggle();

  return (
    <>
      <div className="flex justify-between search">
        <input
          type="search"
          value={searchByTitle}
          onChange={(e) => setSearchByTitle(e.currentTarget.value)}
          placeholder="Search using item number"
        />
        <div onClick={toggle} className="filter-icon cursor-pointer">
          <FilterIcon />
        </div>
      </div>
    </>
  );
};

export default Search;
