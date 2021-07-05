export default function Header() {
  return (
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
  );
}