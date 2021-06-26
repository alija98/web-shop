import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import { useGlobalContext } from "../context";

function Filter() {
  const { changeFilterState } = useGlobalContext();
  return (
    <div className="filter__section">
      <button onClick={() => changeFilterState("tv")} className="filter__item">
        TVs
      </button>
      <button
        onClick={() => changeFilterState("laptop")}
        className="filter__item"
      >
        Laptops
      </button>
      <button
        onClick={() => changeFilterState("gadget")}
        className="filter__item"
      >
        Gadgets
      </button>
      <button className="filter__item">Sort</button>
    </div>
  );
}

export default Filter;
