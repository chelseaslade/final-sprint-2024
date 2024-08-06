//Chelsea Slade (Mayne) & Charlene McCarthy
//Final Sprint August 2024

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Layout from "./pages/Layout.js";
import Shop from "./pages/Shop.js";
import Contact from "./pages/Contact.js";
import Cart from "./pages/Cart.js";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
