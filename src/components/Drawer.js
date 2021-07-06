/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
export default function Drawer({ onClose }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img className="cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: "url('./img/sneakers/1.jpg')" }} className="cartItemImg" />
            <div className="mr-20 flex">
              <p className="mb-5">Men’s Sneakers Nike Blazer Mid Suede</p>
              <b>$150</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul className="cartTotal">
            <li className="d-flex">
              <span>Total</span>
              <div />
              <b>$150</b>
            </li>
            <li className="d-flex">
              <span>Taxes 5%:</span>
              <div />
              <b>$7,5</b>
            </li>
          </ul>

          <button className="greenButton" type="button">
            Checkout <img src="./img/arrowRight.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
