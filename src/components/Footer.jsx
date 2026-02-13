import React from "react";
import "./Footer.css";

export default function Footer({ storeName, email, location }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <h4 className="site-footer__title">{storeName}</h4>
          <p className="site-footer__text">
            Built with reusable React components.
          </p>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__title">Contact</h4>
          <p className="site-footer__text">
            Email: <a className="site-footer__link" href={`mailto:${email}`}>{email}</a>
          </p>
          <p className="site-footer__text">Location: {location}</p>
        </div>

        <div className="site-footer__bottom">
          © {year} {storeName}
        </div>
      </div>
    </footer>
  );
}
