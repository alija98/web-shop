import React, { useState, useContext, useReducer, useEffect } from "react";
import { items, sortAsc, sortDsc } from "./Data";
import { compareAsc, compareDsc } from "./Data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState(items);

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
        console.log("sortianje,", filteredItems);
        setFilteredItems(filteredItems.slice(0).sort(compareDsc));
      }
      if (sortState === "PRICE LOW TO HIGH") {
        setFilteredItems(filteredItems.slice(0).sort(compareAsc));
      }
    }
  };

  return (
    <AppContext.Provider value={{ filteredItems, showData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
