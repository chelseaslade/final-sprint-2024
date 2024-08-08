//Chelsea Slade (Mayne) & Charlene McCarthy
//Final Sprint August 2024

import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Layout from "./pages/Layout.js";
import Shop from "./pages/Shop.js";
import Contact from "./pages/Contact.js";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

const App = () => {
  const [cartBooks, setCartBooks] = useState([]);

  const addToCart = (product) => {
    setCartBooks((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartBooks((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <>
      <div class="Main">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100..900&family=Satisfy&display=swap');
        </style>
        <Layout />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/Cart"
            element={
              <ShoppingCart
                cartBooks={cartBooks}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
