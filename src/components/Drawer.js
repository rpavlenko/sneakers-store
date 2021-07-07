/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
export default function Drawer({ onClose, items = [], onRemove }) {
  const onClickRemove = id => {
    onRemove(items, id);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img className="cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} />
        </h2>

        <div className="items">
          {items.map(item => (
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="cartItemImg" />
              <div className="mr-20 flex">
                <p className="mb-5">{item.title}</p>
                <b>${item.price}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
                onClick={() => onClickRemove(item.id)}
              />
            </div>
          ))}
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
