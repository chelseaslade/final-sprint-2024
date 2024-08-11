import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    streetAddress: "",
    phoneNumber: "",
    emailAddress: "",
    creditCardNumber: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    // Credit Card Validation (16 digits, numbers only)
    const cleanCardNumber = formData.creditCardNumber.replace(/\s/g, "");
    if (!/^\d{16}$/.test(cleanCardNumber)) {
      newErrors.creditCardNumber =
        "Credit Card Number must be exactly 16 digits and numbers only.";
    }

    // Phone Number Validation (digits only)
    if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be digits only.";
    }

    // Email Validation (basic format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.emailAddress)) {
      newErrors.emailAddress = "Email Address is invalid.";
    }

    // CVC Validation (exactly 3 digits, numbers only)
    if (!/^\d{3}$/.test(formData.cvc)) {
      newErrors.cvc = "CVC must be exactly 3 digits and numbers only.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Cart Summary</h2>
      <div className="cart-box">
        <div className="Cart">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
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
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              ))}

              <div className="cart-summary">
                <hr className="line" />
                <div className="summary-info">
                  <p>
                    <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
                  </p>
                  <p>
                    <strong>Tax:</strong> (15%): ${tax.toFixed(2)}
                  </p>
                  <p>
                    <strong>Total:</strong> ${total.toFixed(2)}
                  </p>
                </div>
                <hr className="line" />
              </div>

              <form id="Form1" onSubmit={handleSubmit}>
                <label>
                  <strong>Contact Information:</strong>
                </label>
                <br />
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  className="u-full-width"
                  placeholder="Customer Name"
                  value={formData.customerName}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  className="u-full-width"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="u-full-width"
                  placeholder="Phone Number (1709...)"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <p className="error">{errors.phoneNumber}</p>
                )}
                <br />
                <input
                  type="text"
                  id="emailAddress"
                  name="emailAddress"
                  className="u-full-width"
                  placeholder="Email Address (you@email.com)"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />
                {errors.emailAddress && (
                  <p className="error">{errors.emailAddress}</p>
                )}
                <br />
                <br />
                <label>
                  <strong>Payment Information:</strong>
                </label>
                <br />
                <input
                  type="text"
                  id="creditCardNumber"
                  name="creditCardNumber"
                  className="u-full-width"
                  placeholder="Credit Card Number (XXXX XXXX XXXX XXXX)"
                  value={formData.creditCardNumber}
                  onChange={handleChange}
                />
                {errors.creditCardNumber && (
                  <p className="error">{errors.creditCardNumber}</p>
                )}
                <br />
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  className="u-full-width"
                  placeholder="CVC (XXX)"
                  value={formData.cvc}
                  onChange={handleChange}
                />
                {errors.cvc && <p className="error">{errors.cvc}</p>}
                <br />
                <br />
                <Link to={"/Confirmation"}>
                  <input
                    type="submit"
                    value="Get Confirmation"
                    className="u-full-width"
                  />
                </Link>
                <br />
              </form>
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

export default Checkout;
