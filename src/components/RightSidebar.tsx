import { MouseEventHandler } from 'react';
import { useItems, useSearch, useToggle } from '../hooks';

const RightSidebar = () => {
  const { isToggled, setIsToggled } = useToggle();
  const { setItems } = useItems();
  const { setSearch } = useSearch();

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
    </aside>
  );
};

export default RightSidebar;
