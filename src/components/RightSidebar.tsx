import { MouseEventHandler } from 'react';
import { useSearch, useToggle } from '../hooks';

const CloseIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 cursor-pointer"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const RightSidebar = () => {
  const { isToggled, setIsToggled } = useToggle();
  const { search, setSearch } = useSearch();

  const handleResetAll: MouseEventHandler = () => {
    setIsToggled(!isToggled);
    setSearch('');
  };

  const handleClose = () => setIsToggled(!isToggled);

  return (
    <aside
      className="right-sidebar"
      style={{
        transform: !isToggled ? 'translateX(100vh)' : 'translateX(0) ',
      }}
    >
      <div className="flex justify-between">
        <p>Set Parameters</p>
        <button className="cursor-pointer" onClick={handleResetAll}>
          Reset All
        </button>

        <div onClick={handleClose} className="filter-icon">
          <CloseIcon />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="sidebar-search">Item</label>
        <input
          type="text"
          id="sidebar-search"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
    </aside>
  );
};

export default RightSidebar;
