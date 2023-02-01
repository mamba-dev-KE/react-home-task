import { useSearch } from '../hooks';
import { ContentArea, EmptyContentArea, Search } from '.';

const Main = () => {
  const { search } = useSearch();

  return (
    <section className="main">
      <header className="flex justify-between items-center">
        <div className="main-text">Item Search</div>
        <Search />
      </header>
      <div className="flex justify-center items-center">
        {search ? <ContentArea /> : <EmptyContentArea />}
      </div>
    </section>
  );
};

export default Main;
