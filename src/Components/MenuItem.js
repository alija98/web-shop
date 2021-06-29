import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ id, name, image, price }) {
  return (
    <Link to={`/item/${id}`} className="menu__item">
      <div className="img__container">
        <img src={image}></img>
      </div>
      <div className="item__container">
        <h2>{name}</h2>
        <h3>{price}$</h3>
      </div>
    </Link>
  );
}

export default MenuItem;
