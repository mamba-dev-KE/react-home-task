import { MouseEventHandler } from 'react';
import { useSearch, useToggle } from '../hooks';

const RightSidebar = () => {
  const { isToggled, setIsToggled } = useToggle();
  const { search, setSearch } = useSearch();

  const handleResetAll: MouseEventHandler = () => {
    setIsToggled(!isToggled);
    setSearch('');
  };

  return (
    <aside
      className="right-sidebar"
      style={{
        transform: !isToggled ? 'translateX(100vh)' : 'translateX(0) ',
      }}
    >
      <div className="flex justify-between">
        <p>Set Parameters</p>
        <button onClick={handleResetAll}>Reset All</button>
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
