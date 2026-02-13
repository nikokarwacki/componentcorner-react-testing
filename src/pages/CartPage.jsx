import React from "react";
import CartItem from "../components/CartItem";

export default function CartPage({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
          />
        ))
      )}
    </div>
  );
}
