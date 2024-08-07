import React from "react";
import { mockData } from "../mockAPI";

const ProductList = () => {
  return (
    <div className="ProductList">
      <h1>Product List</h1>
      <ul>
        {mockData.products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "150px", objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if image fails
                e.target.src = "https://via.placeholder.com/100x150"; // Placeholder image
              }}
            />
            <h2>{product.name}</h2>
            <p>{product.author}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
