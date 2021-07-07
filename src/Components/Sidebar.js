import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { sidebarShow } = useGlobalContext();
  console.log(sidebarShow);
  return (
    <section className={`sidebar${sidebarShow ? "__show" : ""}`}>
      <div className="sidebar__menu">
        <ul className="sidebar__list">
          <Link to="/">
            <li>SHOP</li>
          </Link>
          <Link to="/about">
            <li>ABOUT US</li>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
