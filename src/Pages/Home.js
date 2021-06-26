import React, { useEffect, useState } from "react";
import Filter from "../Components/FilterMenu";
import MenuItem from "../Components/MenuItem";
import { useGlobalContext } from "../context";
import { items } from "../Data";

function Home() {
  const [filteredItems, setFilteredItems] = useState(items);
  const { filterState } = useGlobalContext();

  useEffect(() => {
    setFilteredItems(items.filter((item) => item.tag === filterState));
  }, [filterState]);

  return (
    <section className="main__section>">
      <Filter />

      <div className="item__menu">
        {filteredItems.map((item) => {
          return (
            <MenuItem
              key={item.key}
              image={item.image}
              name={item.name}
              price={item.price}
            ></MenuItem>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
