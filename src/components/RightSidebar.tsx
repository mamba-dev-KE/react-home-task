import { MouseEventHandler, useState } from 'react';
import { useChecked, useSearch, useToggle } from '../hooks';

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
  const { searchByTitle, setSearchByTitle, searchByOrder, setSearchByOrder } =
    useSearch();
  const {} = useChecked();

  const handleResetAll: MouseEventHandler = () => {
    setIsToggled(!isToggled);
    setSearchByTitle('');
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

      <div className="input-groups">
        <div className="input-group">
          <label htmlFor="sidebar-search">Search by Item #</label>
          <input
            type="text"
            id="sidebar-search"
            value={searchByTitle}
            onChange={(e) => setSearchByTitle(e.currentTarget.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="sidebar-order">Search by Order #</label>
          <input
            type="text"
            value={searchByOrder}
            onChange={(e) => setSearchByOrder(e.currentTarget.value)}
          />
        </div>
        <fieldset className="input-group">
          <legend>Type(multi select)</legend>
          <div className="flex justify-between">
            <div className="flex justify-between items-center">
              <input type="checkbox" id="CAO" name="CAO" value="CAO" />
              <label htmlFor="coding">CAO</label>
            </div>
            <div className="flex justify-between items-center">
              <input type="checkbox" id="SFO" name="SFO" value="SFO" />
              <label htmlFor="SFO">SFO</label>
            </div>
            <div className="flex justify-between items-center">
              <input type="checkbox" id="EDF" name="interest" value="EDF" />
              <label htmlFor="EDF">EDF</label>
            </div>
          </div>
        </fieldset>
      </div>
    </aside>
  );
};

export default RightSidebar;
