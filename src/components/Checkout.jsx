import React from "react";

const Checkout = ({ cartItems }) => {
  return (
    <>
      <div className="Checkout">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <form id="form1">
        <label>Contact Information:</label>
        <br />
        <input
          type="text"
          id="customerName"
          name="customerName"
          class="u-full-width"
          placeholder="Customer Name"
        ></input>
        <br />
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          class="u-full-width"
          placeholder="Street Address"
        ></input>
        <br />

        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          class="u-full-width"
          placeholder="Phone Number (1709...)"
        ></input>
        <br />

        <input
          type="text"
          id="emailAddress"
          name="emailAddress"
          class="u-full-width"
          placeholder="Email Address (you@email.com)"
        ></input>
        <br />
        <br />

        <label>Payment Information:</label>
        <br />

        <input
          type="text"
          id="creditCardNumber"
          name="creditCardNumber"
          class="u-full-width"
          placeholder="Credit Card Number (XXXX XXXX XXXX XXXX)"
        ></input>
        <br />

        <input
          type="text"
          id="cvc"
          name="cvc"
          class="u-full-width"
          placeholder="CVC (XXX)"
        ></input>
        <br />
        <br />

        <input
          type="submit"
          value="Get Confirmation"
          class="u-full-width"
        ></input>
        <br />
      </form>
      <br />
    </>
  );
};

export default Checkout;
