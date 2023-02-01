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
    let searchTerms: string[] = [];
    let filteredItems: Item[] = [];

    if (searchByTitle) {
      searchTerms = useMemo(
        () => searchByTitle.trim().split(',').filter(Boolean),
        [searchByTitle]
      );

      filteredItems = useMemo(
        () =>
          (items ?? []).filter((item) =>
            searchTerms.some((searchTerm) =>
              item.item_no.toString().toLowerCase().includes(searchTerm)
            )
          ),
        [items, searchTerms]
      );
    }

    if (searchByOrder) {
      searchTerms = useMemo(
        () => searchByOrder.trim().split(',').filter(Boolean),
        [searchByOrder]
      );

      filteredItems = useMemo(
        () =>
          (items ?? []).filter((item) =>
            searchTerms.some((searchTerm) =>
              item.order_no.toString().toLowerCase().includes(searchTerm)
            )
          ),
        [items, searchTerms]
      );
    }

    if (isCAO || isEDF || isSFO) {
      const typeFilters: string[] = [];

      if (isCAO) {
        typeFilters.push('CAO');
      }
      if (isEDF) {
        typeFilters.push('EDF');
      }
      if (isSFO) {
        typeFilters.push('SFO');
      }

      filteredItems = useMemo(
        () =>
          (items ?? []).filter((item) =>
            typeFilters.some((typeFilter) =>
              item.type.toLowerCase().includes(typeFilter.toLowerCase())
            )
          ),
        [items, typeFilters]
      );
    }

    return filteredItems;
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
