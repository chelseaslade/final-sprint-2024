import React from "react";

const ShoppingCart = ({ cartBooks }) => {
  return (
    <div className="Cart">
      {cartBooks.map((product) => (
        <div key={product.id} className="cartBook">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
