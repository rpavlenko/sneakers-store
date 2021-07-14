/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
export default function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img className="cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
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
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Cart is empty</h2>
            <p className="opacity-6">Add at least one product to make an order</p>
            <button type="button" onClick={onClose} className="greenButton">
              <img onClick={onClose} src="/img/arrow.svg" alt="Arrow" />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
