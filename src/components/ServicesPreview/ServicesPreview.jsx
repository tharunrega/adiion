import React from 'react';
import { FaLaptopCode, FaCloud, FaHeadset, FaDatabase, FaArrowRight } from 'react-icons/fa';
import './ServicesPreview.css';
import { Link } from 'react-router-dom';

const services = [
  
  {
    title: 'Data Solutions',
    icon: <FaDatabase className="service-icon" />,
    description: 'Unlock insights with advanced data management and analytics.',
  },
  
  {
    title: 'Development',
    icon: <FaLaptopCode className="service-icon" />,
    description: 'Custom software and web solutions tailored to your business needs.',
  },
  {
    title: 'Cloud Services',
    icon: <FaCloud className="service-icon" />,
    description: 'Scalable and secure cloud integration for modern infrastructure.',
  },
  {
    title: 'IT Support',
    icon: <FaHeadset className="service-icon" />,
    description: 'Reliable support to keep your operations running smoothly.',
  },
]

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/services" className="card-arrow-btn">
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/services" className="view-more-btn">More Services</Link>
    </section>
  );
};

export default ServicesPreview;
