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
    <div className="ProductDetails">
      <h2>Your selection:</h2>
      <div className="product-container">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/200x300";
          }}
        />
        <div className="ProductBox">
          <p>
            <strong>Title:</strong> {product.name}
          </p>
          <p>
            <strong>Author:</strong> {product.author}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
