import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { sidebarShow, changeSidebarShow } = useGlobalContext();
  const node = useRef();
  useEffect(() => {
    console.log(sidebarShow);
    if (sidebarShow) {
      document.addEventListener("mousedown", handleClick);
    } else {
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  }, [sidebarShow]);
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    changeSidebarShow();
  };
  return (
    <section
      className={`${sidebarShow ? "sidebar show" : "sidebar"}`}
      ref={node}
    >
      <div className="sidebar__menu">
        <ul className="sidebar__list">
          <Link to="/" onClick={() => changeSidebarShow()}>
            <li>SHOP</li>
          </Link>
          <Link to="/about" onClick={() => changeSidebarShow()}>
            <li>ABOUT US</li>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
