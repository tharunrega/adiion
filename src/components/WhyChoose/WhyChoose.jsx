import React from 'react';
import './WhyChoose.css';
import { FaUserTie, FaLightbulb, FaHeadset, FaHandshake } from 'react-icons/fa';

const WhyChoose = () => {
  const reasons = [
    {
      title: 'Client-Centric Approach',
      description: 'We prioritize your goals and ensure every solution is tailored to your needs.',
      icon: <FaHandshake />,
    },
    {
      title: 'Expert Team',
      description: 'Our skilled professionals bring deep tech expertise and industry experience.',
      icon: <FaUserTie />,
    },
    {
      title: 'Innovative Solutions',
      description: 'We combine creativity and technology to deliver future-ready products.',
      icon: <FaLightbulb />,
    },
    {
      title: 'End-to-End Support',
      description: 'From consultation to post-launch support, we’re with you at every step.',
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="why-choose">
      <h2 className="section-title">Why Choose Adiion</h2>
      <div className="reason-cards">
        {reasons.map((reason, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
