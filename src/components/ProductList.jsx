import React, { useState } from "react";
import { mockData } from "../mockAPI";
import "../App.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = mockData.products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="list-container">
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search by title, category, or author"
        className="search-bar"
        value={searchQuery}
        onChange={handleSearch}
      ></input>
      <button onClick={() => console.log("Search Initiated")}>Search</button>
      <ul>
        <div className="item-box">
          <div className="list-item">
            {filteredProducts.map((product) => (
              <li key={product.id} style={{ marginBottom: "20px" }}>
                <Link to={`/product/${product.id}`}>
                  {" "}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/100x150";
                    }}
                  />
                </Link>
                <h2>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h2>
                <p>{product.author}</p>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Category: {product.category}</p>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ProductList;
