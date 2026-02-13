import React from "react";

import { useParams } from "react-router-dom";

export default function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === String(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
