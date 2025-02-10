import React from 'react';
import Hero from '../../components/section-hompage/hero/Hero';
import Description from '../../components/section-hompage/description/Description';
import About from '../../components/section-hompage/about/About';
import Review from '../../components/section-hompage/review/Review';
import Feature from '../../components/section-hompage/feature/Feature';
import Product from '../../components/section-hompage/production/Production';

const HomePage: React.FC = () => {
  return (
    <div>
        <Hero />
        <About />
        <Feature />
        <Description />
        <Review />
        <Product />
    </div>
  );
};

export default HomePage;
