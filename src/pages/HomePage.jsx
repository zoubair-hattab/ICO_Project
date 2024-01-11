import React from 'react';
import NavBar from '../components/navBar/Navbar';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import Trend from '../components/trend/Trend';
import MarketPlace from '../components/marketPlace/MarketPlace';
import Work from '../components/work/Work';
import About from '../components/about/About';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Trend />
      <MarketPlace />
      <Work />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
