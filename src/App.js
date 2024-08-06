//Chelsea Slade (Mayne) & Charlene McCarthy
//Final Sprint August 2024

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Layout from "./pages/Layout.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/products" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
