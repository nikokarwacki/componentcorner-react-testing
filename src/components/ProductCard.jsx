import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={product.image} alt={product.name} />
      </div>

      <div className="product-card__body">
        <div className="product-card__top">
          <h3 className="product-card__name">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <span className="product-card__price">${product.price.toFixed(2)}</span>
        </div>

        <p className="product-card__desc">{product.description}</p>

        <button className="product-card__btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
