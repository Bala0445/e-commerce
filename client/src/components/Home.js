import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <img src="/images/logo.png" alt="Logo" />
      <h1>My E-Commerce Store</h1>
      <button onClick={() => navigate("/products")}>View Products</button>
    </div>
  );
}