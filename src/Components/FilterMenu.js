import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import { useGlobalContext } from "../context";

function Filter() {
  const [buttonState, setButtonState] = useState("");
  const { changeFilterState } = useGlobalContext();

  return (
    <div className="filter__section">
      <button
        onClick={() => changeFilterState("tv")}
        className={`filter__item${buttonState}`}
      >
        TVs
      </button>
      <button
        onClick={() => changeFilterState("laptop")}
        className={`filter__item${buttonState}`}
      >
        Laptops
      </button>
      <button
        onClick={() => changeFilterState("gadget")}
        className={`filter__item${buttonState}`}
      >
        Gadgets
      </button>
      <button className="filter__item">Sort</button>
    </div>
  );
}

export default Filter;
