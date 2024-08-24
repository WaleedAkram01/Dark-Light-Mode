import React from "react";
import "./Navbar.css";
import { useState } from "react";
// **************Images Imported from assests folder*********
import toogle_dark from "/src/assets/day.png";
import logo_light from "/src/assets/logo-black.png";
import logo_dark from "/src/assets/logo-white.png";
import toogle_light from "/src/assets/night.png";
import search_icon_dark from "/src/assets/search-b.png";
import search_icon_light from "/src/assets/search-w.png";
// ***************fucnction Componenent starts here ***************
function Navbar() {
  let [dark, setDark] = useState(false);
  return (
    <div className={dark ? "container" : "container changeColor"}>
      <div className={dark ? "navbar " : "navbar black"}>
        <img className="logo" src={dark ? logo_light : logo_dark} alt="" />
        <ul className={dark ? "link-items" : "link-items change "}>
          <li>Home</li>
          <li>Produts</li>
          <li>Features</li>
          <li>About</li>
        </ul>
        <div className={dark ? " search-box" : "search-box white"}>
          <input type="text" placeholder="Search" />
          <img src={dark ? search_icon_light : search_icon_dark} alt="" />
        </div>
        <img
          className="toogle-icon"
          src={dark ? toogle_light : toogle_dark}
          onClick={() => setDark(!dark)}
        />
      </div>
    </div>
  );
}
export default Navbar;
