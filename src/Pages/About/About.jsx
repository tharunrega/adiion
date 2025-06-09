import React from 'react';
import './About.css';
import { useEffect } from 'react';


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Scroll to top on mount
  }, []);
  return (
    <div className="about-page">
  <div className="about-banner">
    <div className="about-banner-content">
      <h1>About Adiion</h1>
      <p>Driven by innovation, strategy, and technology.</p>
    </div>
  </div>

  <div className="section about-adiion">
    <div className="about-wrapper">
      <h2>About Adiion</h2>
      <p>At <strong>Adiion</strong>, we are driven by innovation, strategy, and technology. As a forward-thinking IT and automation solutions company, we help brands and businesses scale through smart digital transformation. From cutting-edge websites to data intelligence and mobile applications, we craft tailored digital solutions that bridge the gap between vision and results.</p>
    </div>
  </div>

  <div className="section about-mission">
    <div className="about-wrapper">
      <h2>Our Mission</h2>
      <p>Our mission is to empower businesses through technology that works — building scalable, user-friendly, and impactful solutions. We’re not just about code and designs. We’re about creating seamless digital experiences that solve real problems, elevate brand value, and deliver measurable growth.</p>
    </div>
  </div>

  <div className="section about-why">
    <div className="about-wrapper">
      <h2>Why Choose Adiion?</h2>
      <ul>
        <li>Client-focused, results-driven approach</li>
        <li>Custom solutions tailored to your business needs</li>
        <li>End-to-end service — from planning to deployment</li>
        <li>Experienced team passionate about innovation</li>
        <li>Supportive partnerships and long-term growth</li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default About;
