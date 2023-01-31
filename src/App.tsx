import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { fetchItems } from './utils';

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItems('http://localhost:5173/data.json').then(setItems);
  }, []);

  return (
    <main className="container grid">
      <Sidebar />
      <Main />
    </main>
  );
}

export default App;
