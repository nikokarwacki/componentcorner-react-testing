import React from "react";

import "./CartItem.css";

export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <strong>{item.name}</strong>
        <div className="cart-item__price">${item.price.toFixed(2)}</div>
      </div>

      <button className="cart-item__remove" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}
