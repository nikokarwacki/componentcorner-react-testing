import React from "react";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductsPage({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
