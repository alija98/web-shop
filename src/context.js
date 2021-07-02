import React, { useState, useContext, useReducer, useEffect } from "react";
import { items, sortAsc, sortDsc } from "./Data";
import { compareAsc, compareDsc } from "./Data";
import reducer from "./reducer";
const AppContext = React.createContext();

const initalState = {
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [state, dispatch] = useReducer(reducer, initalState);

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  const showData = (filterState, sortState) => {
    //filter

    if (filterState === "all") {
      console.log("all");
      setFilteredItems(items);
    }
    if (!sortState && filterState && filterState !== "all") {
      console.log("tvs");
      setFilteredItems(items.filter((item) => item.tag === filterState));
    }
    //sort

    if (sortState && !filterState) {
      if (sortState === "PRICE HIGH TO LOW") {
        setFilteredItems(filteredItems.slice(0).sort(compareDsc));
      }
      if (sortState === "PRICE LOW TO HIGH") {
        setFilteredItems(filteredItems.slice(0).sort(compareAsc));
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        filteredItems,
        showData,
        clearCart,
        remove,
        increase,
        decrease,
        addToCart,
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
