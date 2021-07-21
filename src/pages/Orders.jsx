/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
// import { useContext } from 'react';
// import AppContext from '../context';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../context';
import Card from '../components/Card';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // async function fetchData() {
    //   const { data } = await axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/orders');
    //   console.log(data);
    // }
    // fetchData();
    (async () => {
      try {
        const { data } = await axios.get('https://60e5e9bd086f730017a6fe66.mockapi.io/orders');
        // console.log(data.map(obj => obj.items).flat());
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        console.log('Error on orders request', error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}
