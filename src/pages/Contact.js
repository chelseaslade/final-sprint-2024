import React from "react";
import storePic from "../pics/storePic.jpg";

const Contact = () => {
  return (
    <>
      <div className="ContactPage">
        <div className="ContactDetails">
          <div className="ContactText">
            <h2>Contact Us</h2>
            <h4>Address:</h4>
            <p id="Address">
              McCarthy & Slade Publishing House <br />
              16 Silverwood Drive <br />
              St. John's, NL <br /> A1A 1A1
            </p>
            <h4>Contact:</h4>
            <p>
              Phone: (709) 907-7979 <br /> Fax: (709) 907-9797 <br />
              Email: mccarthyslade@publishing.com
            </p>
            <h4>Hours of Operation: </h4>
            <p>Mon - Fri: 9AM - 5PM</p>
          </div>
          <div className="PicContainer">
            <img src={storePic} alt="bookstore" id="StorePicture"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
