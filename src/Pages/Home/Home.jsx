import React from 'react';
import Hero from '../../components/Hero/Hero';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview'; // 👈 Add this
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import { useEffect } from 'react';



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Scroll to top on mount
  }, []);
  return (
    <>
      <main>
        <Hero />
        <HowWeWork  />
        <ServicesPreview /> 
        <WhyChoose />
      </main>
    </>
  );
};

export default Home;
