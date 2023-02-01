import { useItems, useSearch } from '../hooks';

const ContentArea = () => {
  const { items } = useItems();
  const { search } = useSearch();

  const filteredItems = items.filter(
    (item) =>
      item.type.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      item.item_no.toString().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="content-area">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Order #</th>
            <th>Type</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(({ id, item_no, order_no, type }) => (
            <>
              <tr key={id}>
                <td>{id}</td>
                <td>{order_no}</td>
                <td>{type}</td>
                <td>{item_no}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentArea;
