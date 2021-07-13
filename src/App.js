/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

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

    // get added to cart items from db
    axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });

    // get added to favorites items from db
    axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/favorites').then(res => {
      setFavorites(res.data);
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
    axios.delete(`https://60e5e9bd086f730017a6fe66.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(favoriteObj => favoriteObj.id === obj.id)) {
        axios.delete(`https://60e5e9bd086f730017a6fe66.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://60e5e9bd086f730017a6fe66.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      console.warn('Error on adding to favorite');
      console.log(error);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
          filterItems={filterItems}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
