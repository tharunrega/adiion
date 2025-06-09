import React, { useState,useEffect } from 'react';
import './Services.css';
import {
  FaMobileAlt, FaLaptopCode, FaDatabase, FaBullhorn, FaRobot,
  FaCloud, FaShieldAlt, FaHeadset, FaUserTie, FaShoppingCart,
  FaUserClock, FaPlus, FaMinus
} from 'react-icons/fa';
import softwareImg from './images/hero/software.jpg';

const serviceData = [
  {
    title: 'App Development',
    icon: <FaMobileAlt />,
    description: [
      'Seamless apps for iOS & Android.',
      'Boost business reach and usability.',
      'Custom, scalable solutions.'
    ]
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    description: [
      'Responsive modern websites.',
      'Web apps that scale with you.',
      'SEO and performance optimized.'
    ]
  },
  {
    title: 'Data Solutions',
    icon: <FaDatabase />,
    description: [
      'Analytics and warehousing.',
      'Data-driven decision making.',
      'Optimized strategies for growth.'
    ]
  },
  {
    title: 'Digital Marketing',
    icon: <FaBullhorn />,
    description: [
      'SEO, SEM, and social media.',
      'Targeted campaigns to engage.',
      'Comprehensive analytics reporting.'
    ]
  },
  {
    title: 'AI & Automation',
    icon: <FaRobot />,
    description: [
      'Intelligent automation solutions.',
      'Machine learning to optimize.',
      'Streamline business processes.'
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <FaCloud />,
    description: [
      'Secure cloud hosting.',
      'Scalable infrastructure support.',
      'Reliable and cost-effective.'
    ]
  },
  {
    title: 'Cybersecurity',
    icon: <FaShieldAlt />,
    description: [
      'Advanced threat protection.',
      'Secure your digital assets.',
      'Latest cybersecurity protocols.'
    ]
  },
  {
    title: 'BPO & Outsourcing',
    icon: <FaHeadset />,
    description: [
      'Affordable support operations.',
      'Scalable business processes.',
      'Expert service delivery.'
    ]
  },
  {
    title: 'Recruitment & Consulting',
    icon: <FaUserTie />,
    description: [
      'Strategic hiring solutions.',
      'Workforce consulting.',
      'Build your best team.'
    ]
  },
  {
    title: 'Ecommerce Solutions',
    icon: <FaShoppingCart />,
    description: [
      'Robust online store platforms.',
      'Easy product management.',
      'Seamless shopping experiences.'
    ]
  },
  {
    title: 'Virtual Assistance',
    icon: <FaUserClock />,
    description: [
      'Remote executive assistants.',
      'Back-office support services.',
      'Flexible, reliable help.'
    ]
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Scroll to top on mount
  }, []);
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="services-page">
      {/* Banner */}
      <div className="services-page__banner" style={{ backgroundImage: `url(${softwareImg})` }}>
        <div className="services-page__banner-overlay"></div>
        <div className="services-page__banner-content">
          <h1>Your Digital Transformation Partner</h1>
          <p>Scalable, secure, and smart solutions tailored for modern businesses</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="services-page__intro">
        <h2>Transforming Ideas into <span>Digital Excellence</span></h2>
        <p>
          Adiion delivers cutting-edge technology solutions that drive business growth and innovation across industries.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-page__grid">
        {serviceData.map((service, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              className={`services-page__card ${isActive ? 'active' : ''}`}
            >
              <div
                className="services-page__card-content"
                onClick={() => toggleCard(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleCard(index)}
                aria-expanded={isActive}
                aria-controls={`service-desc-${index}`}
              >
                <div className="services-page__card-left">
                  <div className="services-page__icon">{service.icon}</div>
                  <h3 className="services-page__title">{service.title}</h3>
                </div>
                <button
                  className="services-page__toggle-btn"
                  aria-label={isActive ? `Collapse ${service.title} details` : `Expand ${service.title} details`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCard(index);
                  }}
                >
                  {isActive ? <FaMinus /> : <FaPlus />}
                </button>
              </div>

              {isActive && (
                <ul className="services-page__description" id={`service-desc-${index}`}>
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="services-page__cta">
        <h2>Ready to Elevate Your Business?</h2>
        <a href="/contact" className="services-page__cta-button">Contact Us Today</a>
      </div>
    </div>
  );
}
