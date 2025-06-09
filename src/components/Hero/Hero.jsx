import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';

const slides = [
  {
    heading: 'Innovate with Adiion',
    text: 'We deliver custom solutions that drive success.',
    image: slide1,
  },
  {
    heading: 'Empower Your Business',
    text: 'Smart automation and secure technologies.',
    image: slide2,
  },
  {
    heading: 'Join the Future Today',
    text: 'AI-driven solutions for tomorrow’s challenges.',
    image: slide3,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef();

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <section className="hero">
      <div
        className="hero-slider"
        ref={sliderRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt={slide.heading} />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1>{slides[currentIndex].heading}</h1>
        <p>{slides[currentIndex].text}</p>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
