import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}