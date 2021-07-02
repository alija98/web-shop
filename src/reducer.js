import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { items } from "./Data";

const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const tempItems = [...state.cart];

    if (tempItems.filter((e) => e.id === parseInt(action.payload)).length < 1) {
      for (let i = 0; i < items.length; i++) {
        if (parseInt(action.payload) === items[i].id) {
          tempItems.push(items[i]);
        }
      }
    }

    return {
      ...state,
      cart: tempItems,
    };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    console.log(state);
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    console.log(tempCart);
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  //-----------------
  return state;
};

export default reducer;
