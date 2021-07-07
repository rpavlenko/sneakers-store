/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://60e5e9bd086f730017a6fe66.mockapi.io/items')
      .then(res => res.json())
      .then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = obj => {
    // check if item already added to cart, if yes then dont add it
    if (cartItems.some(item => item.id === obj.id)) return;

    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveFromCart = (obj, id) => {
    const newCartItems = obj.filter(item => item.id !== id);
    console.log(setCartItems);
    setCartItems(newCartItems);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={(obj, id) => onRemoveFromCart(obj, id)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map(item => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('add to favorite')}
              onPlus={obj => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
