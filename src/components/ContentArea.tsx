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
  const { search } = useSearch();

  const getFilteredItems = () => {
    const searchTerms = useMemo(
      () => search.trim().split(',').filter(Boolean),
      [search]
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

  console.log(filteredItems.length);

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
    </div>
  );
};

export default ContentArea;
