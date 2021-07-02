import React from "react";
import { useGlobalContext } from "../context";
import { items } from "../Data";
import CartItem from "../Components/CartItem";
import "../CSS/Cart.css";

function Cart() {
  const { cart, total, clearCart, id } = useGlobalContext();
  if (cart.length === 0) {
    return <div className="no_items">Your cart is empty</div>;
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
