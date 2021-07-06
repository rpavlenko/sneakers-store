/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    id: 1,
    title: 'Men’s Sneakers Nike Blazer Mid Suede',
    imageUrl: './img/sneakers/1.jpg',
    price: 150,
  },
  {
    id: 2,
    title: 'Men’s Sneakers Nike Air Max 270',
    imageUrl: './img/sneakers/2.jpg',
    price: 300,
  },
  {
    id: 3,
    title: 'Men’s Sneakers Nike Blazer Mid Suede',
    imageUrl: './img/sneakers/3.jpg',
    price: 200,
  },
  {
    id: 4,
    title: 'Sneakers Puma X Aka Boku Future Rider',
    imageUrl: './img/sneakers/4.jpg',
    price: 200,
  },
];

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map(obj => (
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('add to favorite')}
              onPlus={() => console.log('press plus')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
