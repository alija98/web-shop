import React, { useState, useContext, useReducer, useEffect } from "react";
import { items, sortAsc, sortDsc, items_2 } from "./Data";
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
  const [sidebarShow, setSidebarShow] = useState(false);
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
  const changeSidebarShow = () => {
    setSidebarShow(!sidebarShow);
  };

  const showData = (filterState, sortState) => {
    //filter
    console.log("state", filterState);
    console.log("sort", sortState);

    if (filterState === "all" || (filterState === "all" && sortState)) {
      console.log("all");
      setFilteredItems(items);
      sortFunction(items, sortState);
    }
    if (!sortState && filterState && filterState !== "all") {
      console.log("govno jedno");
      setFilteredItems(items.filter((item) => item.tag === filterState));
      console.log(
        "kako bi trebalo biti",
        items.filter((item) => item.tag === filterState)
      );
    }
    //sort

    if (sortState && !filterState) {
      if (sortState === "PRICE HIGH TO LOW") {
        console.log("sortianje,", filteredItems);
        setFilteredItems(filteredItems.slice(0).sort(compareDsc));
      }
      if (sortState === "PRICE LOW TO HIGH") {
        setFilteredItems(filteredItems.slice(0).sort(compareAsc));
      }
    }
    if (sortState && filterState && filterState !== "all") {
      console.log("uslo je u najgore", sortState, filterState);
      setFilteredItems(items.filter((item) => item.tag === filterState));
      console.log(
        "itemi bi trebali biti",
        items.filter((item) => item.tag === filterState)
      );

      sortFunction(
        items.filter((item) => item.tag === filterState),
        sortState
      );
    }
  };

  const sortFunction = (data, sortOption) => {
    if (sortOption === "PRICE HIGH TO LOW") {
      console.log("sortopciji dodju", data);
      setFilteredItems(data.slice(0).sort(compareDsc));
      console.log("sortianje opadanje,", filteredItems);
    }
    if (sortOption === "PRICE LOW TO HIGH") {
      setFilteredItems(data.slice(0).sort(compareAsc));
      console.log("sortianje rastenje,", filteredItems);
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
        sidebarShow,
        changeSidebarShow,
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
