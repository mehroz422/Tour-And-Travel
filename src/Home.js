import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import Footer from './Footer';
import HeroSection from './HeroSection';



function Home() {
  return (
    <>
       <Link to="/" style={{textDecoration:"none", textDecorationColor:"none", textDecorationStyle:"none"}}>    </Link>

      <HeroSection/>
      <Cards/>
      <Footer/>
      
    </>
  );
}

export default Home;
