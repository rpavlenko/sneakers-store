export default function Card({ title, price, imageUrl }) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="./img/unliked-heart.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src={`${imageUrl}`} alt="sneakers 1" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${price}</b>
        </div>
        <button className="button" type="button">
          <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
