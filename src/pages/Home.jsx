import React from 'react';
import Hero from '../components/home/Hero';
import CategoryGrid from '../components/home/CategoryGrid';
import ProductGrid from '../components/home/ProductGrid';
import Contact from '../components/home/Contact';
import FloatingChat from '../components/common/FloatingChat';

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Contact />
      <FloatingChat />
    </>
  );
};

export default Home;
