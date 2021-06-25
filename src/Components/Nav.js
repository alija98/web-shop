import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "../CSS/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <h2>Web shop</h2>
          </Link>
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li>Shop</li>
            <Link to="/about">
              <li>About us</li>
            </Link>
          </ul>
          <div className="nav__cart">
            <Link to="/cart">
              <FiShoppingCart className="shopping_cart" />
            </Link>
            <div className="cart__info">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
