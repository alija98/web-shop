import React, { useState, useContext, useReducer, useEffect } from "react";
import { items } from "./Data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filteredItems, setFilteredItem] = useState(items);
  const [filterState, setFilterState] = useState("all");

  const changeFilterState = (state) => {
    setFilterState(state);
  };

  const showData = (filterState) => {};

  useEffect(() => {
    console.log(filterState);
  }, [filterState]);

  return (
    <AppContext.Provider value={{ filteredItems, changeFilterState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
