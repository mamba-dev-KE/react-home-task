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
  const { items } = useItems();
  const { search } = useSearch();

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          item.type.toLowerCase().includes(search.toLowerCase()) ||
          item.item_no.toString().includes(search.toLowerCase())
      ),
    []
  );

  return (
    <div className="content-area">
      <table>
        <TableHead />
        <tbody>
          {filteredItems.map(({ id, item_no, order_no, type }) => (
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
