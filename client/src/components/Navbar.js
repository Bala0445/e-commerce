import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/products?search=${search}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Left: Links */}
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      {/* Center: Logo + Search */}
      <div className="navbar-center">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </nav>
  );
}