import React from "react";
import { items } from "../Data.js";
import { useParams } from "react-router-dom";
import "../CSS/SingleItem.css";
import { useGlobalContext } from "../context";

export default function SingleItem() {
  const { id } = useParams();
  const { addToCart } = useGlobalContext();

  const item = items.find((item) => item.id == id);
  const { image, name, price } = item;

  return (
    <section className="singleItem">
      <div className="img_container">
        <img src={image}></img>
      </div>
      <div className="single_item_container">
        <h1>{name}</h1>
        <h2>{price}$</h2>
        <button onClick={() => addToCart(id)} className="add_cart">
          Add to cart
        </button>
      </div>
    </section>
  );
}
