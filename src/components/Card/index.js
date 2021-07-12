/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styles from './Card.module.scss';

export default function Card({ title, price, imageUrl, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          src={isFavorite ? './img/liked.svg' : './img/unliked.svg'}
          alt={isFavorite ? 'liked' : 'unliked'}
          onClick={onClickFavorite}
        />
      </div>

      <img width={133} height={112} src={`${imageUrl}`} alt="sneakers 1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? './img/btn-checked.svg' : './img/plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}
