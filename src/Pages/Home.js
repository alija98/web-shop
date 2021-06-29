import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../Components/FilterMenu";
import MenuItem from "../Components/MenuItem";
import { useGlobalContext } from "../context";

function Home() {
  const { filteredItems } = useGlobalContext();

  return (
    <section className="main__section>">
      <Filter />

      <div className="item__menu">
        {filteredItems.map((item) => {
          return (
            <MenuItem
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              id={item.id}
            ></MenuItem>
            // </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
