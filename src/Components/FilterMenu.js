import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import { useGlobalContext } from "../context";
import { filters, sortOptions } from "../Filters";
import { IoIosArrowDown } from "react-icons/io";

function Filter() {
  const { showData } = useGlobalContext();
  const [sortDisplay, setSortDisplay] = useState(false);
  const [sortState, setSortState] = useState("PRICE HIGH TO LOW");

  //console.log(sortState, filterState);

  return (
    <div className="filter__section">
      {filters.map(({ filterName, filterOption, id }) => {
        return (
          <button
            key={id}
            onClick={() => {
              //   setFilterState(filterOption);
              showData(filterName, null);
            }}
            className="filter__item"
          >
            {filterName}
          </button>
        );
      })}
      <div
        onClick={() => {
          setSortDisplay(!sortDisplay);
        }}
        className="sort"
      >
        <span>SORT: {sortState}</span>
        <span>
          <IoIosArrowDown></IoIosArrowDown>
        </span>
        <div className={sortDisplay ? "sort__body" : "sort__body__active"}>
          <div className="sort__heading"></div>
          <div className="sort__ul">
            <ul>
              {sortOptions.map((sort) => {
                return (
                  <li
                    key={sort.id}
                    onClick={() => {
                      setSortState(sort.filterName);
                      showData(null, sort.filterOption);
                    }}
                  >
                    {sort.filterName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
