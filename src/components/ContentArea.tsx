import { useItems } from '../hooks';

const ContentArea = () => {
  const { items } = useItems();

  return (
    <div className="content-area">
      <pre>{JSON.stringify(items, null, 2)}</pre>
      {items.map((item) => (
        <p>{item.type}</p>
      ))}
    </div>
  );
};

export default ContentArea;
