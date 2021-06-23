import React from "react";
import { BsSearch } from "react-icons/bs";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h2>Web shop</h2>
      </div>
      <div className="nav__menu">
        <ul className="nav__list">
          <li>Shop</li>
          <li>About us</li>
        </ul>
        <div className="nav__search">
          <BsSearch />
        </div>
      </div>
    </div>
  );
}

export default Nav;
