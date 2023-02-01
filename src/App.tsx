import { useEffect, useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import Main from './components/Main';
import { fetchItems } from './utils';

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItems('http://localhost:5173/data.json').then(setItems);
  }, []);

  return (
    <main className="container grid">
      <LeftSidebar />
      <Main />
    </main>
  );
}

export default App;
