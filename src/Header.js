import React from "react";
import { Images } from "./images";
const Header = () => {
  return (
    <header className="mainContainer">
      <div>
        <img src={Images.logo} className="logo" alt="logo" />
      </div>
      <div className="div_top_hypers">
        <ul className="ul_top_hypers ">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#"> home</a>
          </li>
          <li>
            <a href="#"> contact us</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Log in</button>
      </div>
    </header>
  );
};
export default Header;
