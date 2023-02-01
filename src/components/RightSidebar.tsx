import { MouseEventHandler} from 'react';
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
  const {
    searchByTitle,
    setSearchByTitle,
    searchByOrder,
    setSearchByOrder,
    validateSearchByTitle,
  } = useSearch();
  const { isCAO, setIsCAO, isEDF, setIsEDF, isSFO, setIsSFO } = useChecked();

  const validationError = validateSearchByTitle(searchByTitle);

  console.log(validationError);

  const handleResetAll: MouseEventHandler = () => {
    setIsToggled(!isToggled);
    setSearchByTitle('');
    setSearchByOrder('');
    setIsCAO(false);
    setIsEDF(false);
    setIsSFO(false);
  };

  const handleClose = () => setIsToggled(!isToggled);

  return (
    <aside
      className="right-sidebar"
      style={{
        transform: !isToggled ? 'translateX(100vh)' : 'translateX(0) ',
      }}
    >
      <div className="flex justify-between items-center">
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
          <label htmlFor="sidebar-search">Item #</label>
          <input
            type="text"
            id="sidebar-search"
            value={searchByTitle}
            placeholder="Search using item number"
            onChange={(e) => setSearchByTitle(e.currentTarget.value)}
          />
          {validationError === 'EMPTY' ? (
            <p className="validation validation-info">Search by typing above</p>
          ) : validationError === 'INVALID' ? (
            <p className="validation validation-error">
              Valid characters are letters, numbers, and commas
            </p>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="sidebar-order">Order #</label>
          <input
            type="text"
            id="sidebar-order"
            value={searchByOrder}
            placeholder="Search using order number"
            onChange={(e) => setSearchByOrder(e.currentTarget.value)}
          />
        </div>
        <fieldset className="input-group">
          <legend>Type(multi select)</legend>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <input
                type="checkbox"
                id="CAO"
                name="CAO"
                value="CAO"
                checked={isCAO}
                onChange={() => setIsCAO(!isCAO)}
              />
              <label htmlFor="coding">CAO</label>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="checkbox"
                id="SFO"
                name="SFO"
                value="SFO"
                checked={isSFO}
                onChange={() => setIsSFO(!isSFO)}
              />
              <label htmlFor="SFO">SFO</label>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="checkbox"
                id="EDF"
                name="EDF"
                value="EDF"
                checked={isEDF}
                onChange={() => setIsEDF(!isEDF)}
              />
              <label htmlFor="EDF">EDF</label>
            </div>
          </div>
        </fieldset>
      </div>
    </aside>
  );
};

export default RightSidebar;
