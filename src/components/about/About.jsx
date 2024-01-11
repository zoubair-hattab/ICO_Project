import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import aboutBanner from '../../assets/images/about-banner.png';
function About() {
  return (
    <section class="section about" aria-label="about" data-section>
      <div class="container">
        <figure class="about-banner">
          <img
            src={aboutBanner}
            width="748"
            height="436"
            loading="lazy"
            alt="about banner"
            class="w-100"
          />
        </figure>

        <div class="about-content">
          <h2 class="h2 section-title">What Is Crypto</h2>

          <p class="section-text">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>

          <ul class="section-list">
            <li class="section-item">
              <div class="title-wrapper">
                <h3 class="h3 list-title">
                  View real-time cryptocurrency prices
                </h3>
              </div>

              <p class="item-text">
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </p>
            </li>

            <li class="section-item">
              <div class="title-wrapper">
                <h3 class="h3 list-title">
                  Buy and sell BTC, ETH, XRP, OKB, Etc...
                </h3>
              </div>

              <p class="item-text">
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </p>
            </li>
          </ul>

          <Link to="#" class="btn btn-primary">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
