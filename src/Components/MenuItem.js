import React from "react";

function MenuItem({ id, name, image, price }) {
  return (
    <div className="menu__item">
      <div className="img__container">
        <img src={image}></img>
      </div>
      <h1>{name}</h1>
      <h3>{price}$</h3>
    </div>
  );
}

export default MenuItem;
