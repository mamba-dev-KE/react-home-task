import Search from './Search';

type Props = {};

const Main = (props: Props) => {
  return (
    <section className="main">
      <header className="flex justify-between items-center">
        <div className="item-search">Item Search</div>
        <Search />
      </header>
    </section>
  );
};

export default Main;
