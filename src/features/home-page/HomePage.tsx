import React, { useEffect, useState } from 'react';
import Hero from '../../components/section-hompage/hero/Hero';
import Description from '../../components/section-hompage/description/Description';
import About from '../../components/section-hompage/about/About';
import Review from '../../components/section-hompage/review/Review';
import Feature from '../../components/section-hompage/feature/Feature';
import Product from '../../components/section-hompage/production/Production';
import QuestionAnswer from '../../components/section-hompage/question-answer/QuestionAnswer';
import Footer from '../../components/section-hompage/footer/Footer';
import "./home.scss";
import iconScroll from "../../assets/icons/backtop-top.png";
import MyImage from '../../components/my-image/MyImage';

const HomePage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) { // Offset to top > 200px show icon
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to hero
  const scrollToTop = () => {
    const heroElement = document.getElementById('hero'); 
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Hero />
      <About />
      <Feature />
      <Description />
      <Review />
      <Product />
      <QuestionAnswer />
      <Footer />
      {/* Icon Scroll to Top */}
      {showScrollTop && (
        <div className="scroll-top" onClick={scrollToTop}>
          <MyImage src={iconScroll} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
