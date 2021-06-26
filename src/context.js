import React, { useState, useContext, useReducer, useEffect } from "react";
import { items } from "./Data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [filterState, setFilterState] = useState("all");

  const changeFilterState = (state) => {
    setFilterState(state);
  };

  const showData = (filterState) => {
    setFilteredItems(items.filter((item) => item.tag === filterState));
  };

  useEffect(() => {
    showData("laptop");
  }, [filterState]);

  return (
    <AppContext.Provider
      value={{ filteredItems, changeFilterState, filterState }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
