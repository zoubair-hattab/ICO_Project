import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/hero-banner.png';
import './hero.css';
const Hero = () => {
  return (
    <section className="section hero" aria-label="hero" data-section>
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Buy & Sell Digital Assets In The Cryptex
          </h1>

          <p className="hero-text">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell
            crypto asset exchange.
          </p>

          <Link to="#" className="btn btn-primary">
            Get started now
          </Link>
        </div>

        <figure className="hero-banner">
          <img
            src={banner}
            width="570"
            height="448"
            alt="hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
