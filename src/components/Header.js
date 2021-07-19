/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Header({ onClickCart }) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="./img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center">
        <li className="mr-30 d-flex align-center cu-p" onClick={onClickCart}>
          <img width={18} height={18} src="./img/cart.svg" alt="cart" />
          <span>${totalPrice}</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="./img/favorites.svg" alt="favorites" />
          </Link>
        </li>
        <li className="d-flex align-center">
          <img width={18} height={18} src="./img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
