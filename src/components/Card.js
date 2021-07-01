export default function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="./img/unliked-heart.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src="./img/sneakers/1.jpg" alt="sneakers 1" />
      <h5>Men’s Sneakers Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>$300</b>
        </div>
        <button className="button" type="button">
          <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
