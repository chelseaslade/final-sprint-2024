import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cartBooks, removeFromCart }) => {
  // Calculate subtotal, tax, and total
  const subtotal = cartBooks.reduce(
    (total, product) => total + product.price,
    0
  );
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your cart</h2>
      <div className="cart-box">
        <div className="Cart">
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
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/200x300";
                    }}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.author}</p>
                  <p>${product.price}</p>
                  <button onClick={() => removeFromCart(product.id)}>
                    Remove from Cart
                  </button>
                </div>
              ))}

              <div className="cart-summary">
                <hr className="line" />
                <div className="summary-info">
                  <p>Subtotal: ${subtotal.toFixed(2)}</p>
                  <p>Tax (15%): ${tax.toFixed(2)}</p>
                  <p>Total: ${total.toFixed(2)}</p>
                </div>
                <hr className="line" />
              </div>

              <Link to={"/Checkout"}>
                <button id="proceedButton">Proceed to Check Out</button>
              </Link>
            </>
          ) : (
            <div className="EmptyCart">
              <h2 className="h2-two">No items in cart!</h2>
              <p>Shop for items below:</p>
              <Link to={"/Shop"}>
                <button>Shop</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
