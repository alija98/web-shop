import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useGlobalContext } from "../context";

function CartItem({ image, name, price, id, amount }) {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <div className="cart_item">
      <div className="cart_item_img">
        <img src={image}></img>
      </div>
      <div className="cart_item_container">
        <h3>{name}</h3>
        <h4>{price}</h4>

        <button className="remove-btn" onClick={() => remove(id)}>
          Remove Item
        </button>
      </div>
      <div className="cart_item_quantity">
        <span onClick={() => increase(id)} className="arrow_up">
          <IoIosArrowUp />
        </span>
        <span>{amount}</span>
        <span onClick={() => decrease(id)}>
          <IoIosArrowDown className="arrow_down" />
        </span>
      </div>
    </div>
  );
}

export default CartItem;
