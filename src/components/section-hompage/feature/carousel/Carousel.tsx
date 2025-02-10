import React, { useState, useRef, useEffect } from 'react';
import './carousel.scss';
import { FeatureItem } from '../../../../model/ItemFeature';
import ItemFeature from '../item-feature/ItemFeature';

interface CarouselProps {
  items: FeatureItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>No items to display</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexOfList, setCurrentIndexOfList] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const goToNext = () => {
    if (isMobile) {
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex < items.length - 3) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }
    if (currentIndexOfList < items.length - 1) {
      setCurrentIndexOfList(currentIndexOfList + 1);
    } else {
      setCurrentIndexOfList(0);
    }
  };

  const goToPrev = () => {
    if (isMobile) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(items.length - 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(items.length - 3);
      }
    }
    if (currentIndexOfList === 0) {
      setCurrentIndexOfList(currentIndexOfList + items.length - 1);
    } else {
      setCurrentIndexOfList(currentIndexOfList - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.touches[0].clientX;
    setStartPosition(touchStart);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touchMove = e.touches[0].clientX;
    const moveDistance = touchMove - startPosition;

    if (moveDistance > 100) {
      goToPrev();
      setIsDragging(false);
    } else if (moveDistance < -100) {
      goToNext();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const moveDistance = e.clientX - startPosition;
    if (moveDistance > 100) {
      goToPrev();
      setIsDragging(false);
    } else if (moveDistance < -100) {
      goToNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="liner-carousel flex-column item-start space-between">
        <div>
          <p className="large-title">Our Features
            Special For You</p>
          <p className="small-text w-75">We provide various special
            features for all of you</p>
        </div>
        <div className="carousel-dots hidden-sm">
          {Array.from({ length: items.length }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndexOfList === index ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
      <div className="carousel-items hidden-sm">
        {items
          .slice(currentIndex, currentIndex + 3)
          .map((item, index) => (
            <div key={item.id} className="carousel-item">
              <ItemFeature
                icon={item.icon}
                title={item.title}
                content={item.content}
                isActive={index === 1}
              />
            </div>
          ))}
      </div>
      <div className="carousel-items hidden-lg">
        {items
          .slice(currentIndex, currentIndex + 1)
          .map((item) => (
            <div key={item.id} className="carousel-item">
              <ItemFeature
                icon={item.icon}
                title={item.title}
                content={item.content}
                isActive={true}
              />
            </div>
          ))}
      </div>
      <div className="carousel-dots hidden-lg">
        {Array.from({ length: items.length }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
