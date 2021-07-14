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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // below use axios instead of fetch api
    // fetch('https://60e5e9bd086f730017a6fe66.mockapi.io/items')
    //   .then(res => res.json())
    //   .then(json => {
    //     setItems(json);
    //   });
    async function fetchData() {
      setIsLoading(true);

      // get added to cart items from db
      const cartResponse = await axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/cart');

      // get added to favorites items from db
      const favoritesResponse = axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/favorites');

      // get all items from db
      const itemsResponse = await axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = obj => {
    // check if item already added to cart, if yes then dont add it
    // if (cartItems.some(item => item.id === obj.id)) return;

    // sent added to cart items to db
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://60e5e9bd086f730017a6fe66.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://60e5e9bd086f730017a6fe66.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
      }
    } catch (e) {
      console.log(e);
    }
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
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
