import { RiShoppingBag2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import "./Nav.scss"

export const Nav = () => {
  return (
    <header className='header'>
      <div className="container flex">
        <div className="logo">
          <RiShoppingBag2Fill fontSize={25} color="#ff9f00" />
          <h2>e-Shop</h2>
        </div>

        <div className="search-container">
          <input type="text" />
          <span>
            <IoSearchOutline color="#131921" size={18} className="search-icon" />
          </span>
        </div>

        <nav className="nav-container">
          <div className="nav-item">
            <p>Hello Guest</p>
            <strong>Sign In</strong>
          </div>
          <div className="nav-item">
            <p>You</p>
            <strong>Shop</strong>
          </div>

          <div className="nav-cart">
            <FaShoppingCart color="white" size={20} className="cart-icon"/>
            <span className="cart-count">0</span>
          </div>

        </nav>
      </div>
    </header>
  )
}
