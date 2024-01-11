import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
const Navbar = () => {
  const navaLink = [
    { title: 'homePage' },
    { title: 'Blog' },
    { title: 'about' },
    { title: 'service' },
    { title: 'contact' },
  ];
  const [activeHeader, setActiveHeader] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      setActiveHeader(true);
    } else {
      setActiveHeader(false);
    }
  });

  return (
    <header className={`header ${activeHeader && 'active'}`} data-header>
      <div className="container">
        <Link to="#" className="logo">
          <img
            src="https://codewithsadee.github.io/cryptex/assets/images/logo.svg"
            alt="crypto log"
            width={32}
            height={32}
          />
          crypto
        </Link>
        <nav className={`navbar ${activeNavbar && 'active'}`} data-navbar>
          <ul className="navbar-list">
            {navaLink?.map((item) => (
              <li
                className="navbar-item"
                key={item.title}
                onClick={() => setActiveNavbar(false)}
              >
                <Link to="#" className="navbar-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`nav-toggle-btn ${activeNavbar && 'active'}`}
          onClick={() => setActiveNavbar(!activeNavbar)}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
        <Link to="#" className="btn btn-outline">
          Connect
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
