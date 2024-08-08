import { Outlet, Link } from "react-router-dom";
import React from "react";
import "../App.css";
import cartIcon from "../pics/cartIcon.png";

const Layout = () => {
  return (
    <>
      <div className="Nav">
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>

            <li id="cartNav">
              <Link to="/Cart">
                Cart
                <img src={cartIcon} alt="cart icon" id="cartIcon"></img>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
