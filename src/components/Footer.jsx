import React from "react";
import "../App.css";
import Facebook from "../pics/Facebook.png";
import Insta from "../pics/Insta.png";
import LinkedIn from "../pics/LinkedIn.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="SocialMedia">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook Icon"></img>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Insta} alt="Instagram Icon"></img>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="Instagram Icon"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
