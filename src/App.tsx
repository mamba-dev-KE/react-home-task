import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Main from './components/Main';

function App() {
  return (
    <main className="container grid">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </main>
  );
}

export default App;
