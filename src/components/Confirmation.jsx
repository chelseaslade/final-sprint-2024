import React, { useState, useEffect } from "react";
import "../App.css";

const generatedNumbers = new Set();

function generateUnique10DigitNumber() {
  let number;
  do {
    number = Math.floor(1000000000 + Math.random() * 9000000000);
  } while (generatedNumbers.has(number));

  generatedNumbers.add(number);
  return number;
}

const Confirmation = () => {
  const [confirmationNumber, setConfirmationNumber] = useState(null);

  useEffect(() => {
    const newNumber = generateUnique10DigitNumber();
    setConfirmationNumber(newNumber);
  }, []);

  return (
    <div className="ConfirmationContainer">
      <div className="ConfirmationText">
        <h2>Confirmation Summary</h2>
        <p>
          Thank you for ordering. <br />
          <br />
          Your order confirmation number is #
          {confirmationNumber !== null ? confirmationNumber : "Loading..."}.
          <br />
          <br />
          Please check your email for an invoice.
          <br />
          <br /> If you require further assistance please call us at (709)
          907-7979.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
