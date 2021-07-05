import styles from './Card.module.scss';

console.log('styles: ', styles);

export default function Card({ title, price, imageUrl, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="./img/unliked-heart.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src={`${imageUrl}`} alt="sneakers 1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${price}</b>
        </div>
        <button className="button" type="button" onClick={onClick}>
          <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
