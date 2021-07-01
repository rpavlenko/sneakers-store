import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
