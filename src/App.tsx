import {LeftSidebar,Main, RightSidebar} from './components';

const App = () => {
  return (
    <main className="container grid">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </main>
  );
}

export default App;
