import React from "react";
import { Link } from "react-router-dom";

//Functions for ShoppingCart are defined in App.js
const ShoppingCart = ({ cartBooks, removeFromCart }) => {
  return (
    <div className="Cart">
      {/* Checking to see if array is greater than 0 - If it is, display items and check out button. */}
      {cartBooks.length > 0 ? (
        <>
          {cartBooks.map((product) => (
            <div key={product.id} className="cartBook">
              <img
                src={product.image}
                alt="Book cover"
                style={{
                  width: "100px",
                  height: "200px",
                  objectFit: "contain",
                }}
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop if image fails
                  e.target.src = "https://via.placeholder.com/200x300"; // Placeholder image
                }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>
                {" "}
                Remove from Cart
              </button>
            </div>
          ))}
          <Link to={"/Checkout"}>
            <button id="proceedButton">Proceed to Check Out</button>
          </Link>
        </>
      ) : (
        // Outside of check for more than 0 items in cart array, therefore display below if no items in cart
        <div className="EmptyCart">
          <h2>No items in cart!</h2>
          <p> Shop for items below: </p>
          <Link to={"/Shop"}>
            <button>Shop</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
