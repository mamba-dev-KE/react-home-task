import { useEffect, useMemo } from 'react';
import { useChecked, useItems, useSearch } from '../hooks';
import { Item } from '../context/Items';

const TableHead = () => (
  <thead>
    <tr>
      <th></th>
      <th>Order #</th>
      <th>Type</th>
      <th>Item</th>
    </tr>
  </thead>
);

const ContentArea = () => {
  const { items, error } = useItems();
  const { searchByTitle, searchByOrder } = useSearch();
  const { isCAO, isEDF, isSFO } = useChecked();

  const getFilteredItems = () => {
    const filteredItemsFunc = useMemo(() => {
      let filteredItems: Item[] = items ?? [];

      if (searchByTitle) {
        const searchTerms = searchByTitle.trim().split(',').filter(Boolean);
        filteredItems = filteredItems.filter((item) =>
          searchTerms.some((searchTerm) =>
            item.item_no.toString().toLowerCase().includes(searchTerm)
          )
        );
      }

      if (searchByOrder) {
        const searchTerms = searchByOrder.trim().split(',').filter(Boolean);
        filteredItems = filteredItems.filter((item) =>
          searchTerms.some((searchTerm) =>
            item.order_no.toString().toLowerCase().includes(searchTerm)
          )
        );
      }

      if (isCAO || isEDF || isSFO) {
        const searchTerms = ['CAO', 'EDF', 'SFO'].filter((searchTerm) => {
          if (searchTerm === 'CAO' && isCAO) {
            return true;
          }
          if (searchTerm === 'EDF' && isEDF) {
            return true;
          }
          if (searchTerm === 'SFO' && isSFO) {
            return true;
          }
          return false;
        });

        filteredItems = filteredItems.filter((item) =>
          searchTerms.some((searchTerm) =>
            item.type.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      return filteredItems;
    }, [items, searchByTitle, searchByOrder, isCAO, isEDF, isSFO]);

    return filteredItemsFunc;
  };

  let filteredItems: Item[] = getFilteredItems();

  if (error) {
    return <div className="content-area-error">{error.message}</div>;
  }

  return (
    <div className="content-area">
      <table>
        <TableHead />
        <tbody>
          {filteredItems?.map(({ id, item_no, order_no, type }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{order_no}</td>
              <td>{type}</td>
              <td>{item_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredItems.length === 0 && (
        <p className="content-area-info">{`no results ${
          searchByTitle || searchByOrder
        }`}</p>
      )}
    </div>
  );
};

export default ContentArea;
