import React from "react";
import publisherLogo from "../pics/publisherLogo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Link to="/Home">
          <img id="logo" src={publisherLogo} alt="Publisher Logo"></img>
        </Link>
      </div>
    </>
  );
};

export default Header;
