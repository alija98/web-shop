import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import "../CSS/Nav.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Sidebar from "./Sidebar";

function Nav() {
  const { amount, changeSidebarShow } = useGlobalContext();
  return (
    <>
      <div className="nav">
        <span onClick={() => changeSidebarShow()} className="hamburger__menu">
          <GiHamburgerMenu />
        </span>
        <div className="nav__container">
          <div className="nav__logo">
            <Link to="/">
              <h2>Web shop</h2>
            </Link>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              <Link to="/">
                <li>Shop</li>
              </Link>
              <Link to="/about">
                <li>About us</li>
              </Link>
            </ul>
            <div className="nav__cart">
              <Link to="/cart">
                <FiShoppingCart className="shopping_cart" />
              </Link>
              <div className="cart__info">{amount}</div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Nav;
