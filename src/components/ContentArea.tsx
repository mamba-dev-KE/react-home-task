import { useMemo } from 'react';
import { useItems, useSearch } from '../hooks';

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
  const { searchByTitle } = useSearch();

  const getFilteredItems = () => {
    const searchTerms = useMemo(
      () => searchByTitle.trim().split(',').filter(Boolean),
      [searchByTitle]
    );

    const filteredItems = useMemo(
      () =>
        (items ?? []).filter((item) =>
          searchTerms.some((searchTerm) =>
            item.item_no.toString().toLowerCase().includes(searchTerm)
          )
        ),
      [items, searchTerms]
    );

    return filteredItems;
  };

  const filteredItems = getFilteredItems();

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
        <p className="content-area-info">{`no results for ${searchByTitle}`}</p>
      )}
    </div>
  );
};

export default ContentArea;
