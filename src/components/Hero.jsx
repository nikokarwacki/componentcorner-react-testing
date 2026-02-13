import React from "react";

import "./Hero.css";

export default function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero" id="featured">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          <a className="hero__cta" href="#shop">{ctaText}</a>
        </div>

        <div className="hero__image-wrap">
          <img className="hero__image" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}
