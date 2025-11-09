import React, { useEffect, useState } from "react";
import api from "../api";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  // Get search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get("/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = async (id) => {
    await api.post("/cart", { productId: id, quantity: 1 });
    alert("Added to cart");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="product-page">
        {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => (
  <div key={p._id} className="product-card">
    <img 
      src={`${process.env.PUBLIC_URL}/images/${p.image}`} 
      alt={p.name} 
      style={{ width: "200px", height: "200px", objectFit: "cover" }} 
    />
    <h3>{p.name}</h3>
    <p>₹{p.price}</p>
    <button onClick={() => addToCart(p._id)}>Add to Cart</button>
  </div>
))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
