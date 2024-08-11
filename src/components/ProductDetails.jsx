import React from "react";
import "../App.css";
import mockData from "../mockAPI";
import { useParams } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = mockData.products.find(
    (product) => product.id === parseInt(id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div className="ProductDetails">
        <h1>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "200px", height: "300px", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop if image fails
            e.target.src = "https://via.placeholder.com/200x300"; // Placeholder image
          }}
        />
        <p>Author: {product.author}</p>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Category: {product.category}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
