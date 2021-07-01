function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Cart
            <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
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

            <div className="cartItem d-flex align-center">
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="./img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="./img/cart.svg" alt="cart" />
            <span>$150</span>
          </li>
          <li className="d-flex align-center">
            <img width={18} height={18} src="./img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
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

          <div className="card">
            <img width={133} height={112} src="./img/sneakers/2.jpg" alt="sneakers 1" />
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

          <div className="card">
            <img width={133} height={112} src="./img/sneakers/3.jpg" alt="sneakers 1" />
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

          <div className="card">
            <img width={133} height={112} src="./img/sneakers/4.jpg" alt="sneakers 1" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
