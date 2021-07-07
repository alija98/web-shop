import React from "react";
import { useGlobalContext } from "../context";
import { items } from "../Data";
import CartItem from "../Components/CartItem";
import "../CSS/Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, total, clearCart, id } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <>
        <div className="no_items">Your cart is empty</div>
        <Link to="/">
          <button className="back__home">BacK to shopping</button>
        </Link>
      </>
    );
  }
  return (
    <section className="cart">
      {cart.map((item) => {
        return (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
          ></CartItem>
        );
      })}
      <div className="total">
        <span>Total</span>
        <span>{total}$</span>
      </div>
      <button onClick={clearCart} className="clear_cart">
        CLEAR CART
      </button>
    </section>
  );
}

export default Cart;
