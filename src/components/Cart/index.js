/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useState } from 'react';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';
import Info from '../Info';

import styles from './Cart.module.scss';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Cart({ onClose, items = [], onRemove, opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://60e5e9bd086f730017a6fe66.mockapi.io/orders', {
        items: cartItems,
      });

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      // remove cart items from mockApi
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://60e5e9bd086f730017a6fe66.mockapi.io/cart/${item.id}`);
        await delay(1000);
      }
    } catch (e) {
      console.log('error on order send');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.cart}>
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img className="cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} />
        </h2>

        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map(item => (
                <div className="cartItem d-flex align-center mb-20" key={item.id}>
                  <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="cartItemImg" />
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>${item.price}</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemove(item.id)} />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul className="cartTotal">
                <li className="d-flex">
                  <span>Total</span>
                  <div />
                  <b>${totalPrice}</b>
                </li>
                <li className="d-flex">
                  <span>Taxes 5%:</span>
                  <div />
                  <b>${((totalPrice / 100) * 5).toFixed(2)}</b>
                </li>
              </ul>

              <button className="greenButton" type="button" onClick={onClickOrder} disabled={isLoading}>
                Checkout <img src="./img/arrowRight.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? 'Order placed' : 'Cart is empty'}
            description={
              isOrderComplete
                ? `Your order #${orderId} will be delivered soon`
                : `Add at least one product to make an order`
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}
