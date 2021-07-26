/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';
import styles from './Card.module.scss';

export default function Card({ id, title, price, imageUrl, onPlus, onFavorite, favorited = false, loading = false }) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const [imageWidth, setImageWidth] = useState('133');
  const [imageHeight, setImageHeight] = useState('112');
  const obj = { id, parentId: id, title, price, imageUrl };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const changeImageSize = () => {
      if (window.innerWidth < 580) {
        setImageWidth('200');
        setImageHeight('150');
      } else {
        setImageWidth('133');
        setImageHeight('112');
      }
    };

    changeImageSize();

    window.addEventListener('resize', changeImageSize);

    return () => window.removeEventListener('resize', changeImageSize);
  }, [window.innerWidth]);

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={222}
          viewBox="0 0 210 222"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="10" y="1" rx="10" ry="10" width="160" height="90" />
          <rect x="10" y="115" rx="3" ry="3" width="160" height="15" />
          <rect x="10" y="135" rx="3" ry="3" width="90" height="15" />
          <rect x="10" y="182" rx="8" ry="8" width="80" height="24" />
          <rect x="138" y="180" rx="10" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'} alt={isFavorite ? 'liked' : 'unliked'} />
            </div>
          )}

          <img
            className={styles.cardImage}
            width={imageWidth}
            height={imageHeight}
            src={`${imageUrl}`}
            alt="sneakers 1"
          />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>${price}</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? 'img/btn-checked.svg' : 'img/plus.svg'}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
