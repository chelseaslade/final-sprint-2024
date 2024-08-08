import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="Checkout">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Checkout;
