import { MouseEventHandler } from 'react';
import { useToggle } from '../hooks';

const RightSidebar = () => {
  const { isToggled, setIsToggled } = useToggle();

  const handleResetAll: MouseEventHandler = () => {
    setIsToggled(!isToggled);
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
