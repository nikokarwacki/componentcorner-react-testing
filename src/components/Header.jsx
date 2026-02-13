import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <Link to="/" className="site-header__name">
            {storeName}
          </Link>
        </div>

        <nav className="site-header__nav">
          <NavLink className="site-header__link" to="/">
            Home
          </NavLink>
          <NavLink className="site-header__link" to="/products">
            Products
          </NavLink>
          <NavLink className="site-header__link" to="/cart">
            Cart
          </NavLink>
        </nav>

        <Link to="/cart" className="cart-container" aria-label="View cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}
