/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    // below use axios instead of fetch api
    // fetch('https://60e5e9bd086f730017a6fe66.mockapi.io/items')
    //   .then(res => res.json())
    //   .then(json => {
    //     setItems(json);
    //   });

    // get all items from db
    axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/items').then(res => {
      setItems(res.data);
    });

    // get added to cart items to db
    axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const filterItems = arr => arr.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

  const onAddToCart = obj => {
    // check if item already added to cart, if yes then dont add it
    // if (cartItems.some(item => item.id === obj.id)) return;

    // sent added to cart items to db
    axios.post('https://60e5e9bd086f730017a6fe66.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = id => {
    // const newCartItems = obj.filter(item => item.id !== id);
    axios.delete(`https://60e5e9bd086f730017a6fe66.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
    // setCartItems(prev => [...prev, obj]);
  };

  const onAddToFavorite = obj => {
    axios.post('https://60e5e9bd086f730017a6fe66.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue ? `Search by "${searchValue}"` : 'All Sneakers'}</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            {searchValue && (
              <img className="clear cu-p" src="/img/btn-remove.svg" alt="Close" onClick={() => setSearchValue('')} />
            )}
            <input type="text" placeholder="Search..." onChange={onChangeSearchInput} value={searchValue} />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {filterItems(items).map((item, index) => (
            <Card
              key={index}
              // id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={obj => onAddToFavorite(obj)}
              onPlus={obj => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
