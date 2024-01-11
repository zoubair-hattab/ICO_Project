import React from 'react';
import './footer.css';
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top" data-section>
        <div class="container">
          <div class="footer-brand">
            <Link to="#" class="logo">
              <img
                src="https://codewithsadee.github.io/cryptex/assets/images/logo.svg"
                width="50"
                height="50"
                alt="Crypto logo"
              />
              Crypto
            </Link>

            <h2 class="footer-title">Let's talk!</h2>

            <Link to="#" class="footer-contact-link">
              +12 345 678 9777
            </Link>

            <Link to="#" class="footer-contact-link">
              crypto.crypto@crypto.com
            </Link>

            <address class="footer-contact-link">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </address>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Products</p>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Spot
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Inverse Perpetual
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                USDT Perpetual
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Exchange
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Launchpad
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Binance Pay
              </Link>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Services</p>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Buy Crypto
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Markets
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Tranding Fee
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Affiliate Program
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Referral Program
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                API
              </Link>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Support</p>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Bybit Learn
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Help Center
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                User Feedback
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Submit a request
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                API Documentation
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Trading Rules
              </Link>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">About Us</p>
            </li>

            <li>
              <Link to="#" class="footer-link">
                About Bybit
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Authenticity Check
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Careers
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Business Contacts
              </Link>
            </li>

            <li>
              <Link to="#" class="footer-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy; 2024 Crypto All Rights Reserved by{' '}
            <Link to="#" class="copyright-link">
              Zoubair Hattab
            </Link>
          </p>

          <ul class="social-list">
            <li>
              <Link to="#" class="social-link">
                <CiFacebook name="logo-facebook"></CiFacebook>
              </Link>
            </li>

            <li>
              <Link to="#" class="social-link">
                <CiTwitter name="logo-twitter"></CiTwitter>
              </Link>
            </li>

            <li>
              <Link to="#" class="social-link">
                <CiInstagram name="logo-instagram"></CiInstagram>
              </Link>
            </li>

            <li>
              <Link to="#" class="social-link">
                <CiLinkedin name="logo-linkedin"></CiLinkedin>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
