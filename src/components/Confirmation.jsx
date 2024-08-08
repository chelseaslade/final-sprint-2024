import React from "react";
import "../App.css";

const Confirmation = () => {
  return (
    <>
      <div className="ConfirmationContainer">
        <div className="ConfirmationText">
          <h2>Confirmation Summary</h2>
          <p>
            Thank you for ordering. <br />
            <br />
            Your order confirmation number is #[random number].
            <br />
            <br />
            Please check your email for an invoice.
            <br />
            <br /> If you require further assistance please call us at (709)
            907-7979.
          </p>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
