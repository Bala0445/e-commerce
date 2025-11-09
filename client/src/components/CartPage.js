import React, { useEffect, useState } from "react";
import api from "../api";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      setCart(res.data);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      fetchCart();
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  return (
    <div className="cart-page">
      <h2>🛒 Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item._id || Math.random()} className="cart-item">
            {/* Product Image */}
            <img
              src={`/images/${item?.product?.image || "placeholder.jpg"}`}
              alt={item?.product?.name || "Product"}
              className="cart-item-image"
            />

            {/* Product Details */}
            <div className="cart-item-details">
              <h4>{item?.product?.name || "Unknown Product"}</h4>
              <p>₹{item?.product?.price || 0}</p>
              <p>Quantity: {item?.quantity || 0}</p>
              <button onClick={() => removeItem(item._id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
