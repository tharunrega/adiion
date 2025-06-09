import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HowWeWork.css';

const steps = [
  {
    title: 'Discovery',
    description: 'We begin with a collaborative exploration of your vision, understanding your challenges, audience, and goals to create a roadmap aligned with your success.',
    image: require('./Images/discovery.jpg'),
  },
  {
    title: 'Planning',
    description: 'Our team outlines clear project timelines, chooses the right technology stack, allocates resources, and establishes communication processes to keep everything on track.',
    image: require('./Images/planning.jpg'),
  },
  {
    title: 'Design & Prototyping',
    description: 'We turn ideas into interactive prototypes. Our designers focus on creating intuitive, user-centric experiences that align with your brand.',
    image: require('./Images/design.jpg'),
  },
  {
    title: 'Development',
    description: 'Our engineers bring the design to life with scalable code. We follow industry best practices for performance, testing, and version control.',
    image: require('./Images/development.jpg'),
  },
  {
    title: 'Delivery & Support',
    description: 'We ensure a smooth handover, provide training if needed, and offer post-launch support to keep your systems running efficiently.',
    image: require('./Images/delivery.jpg'),
  }
];

const HowWeWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 🔄 allows repeated animation on re-scroll
      mirror: true, // 👈 helps play animation on scroll up too
    });
  }, []);

  return (
    <section className="how-we-work">
      <div className="section-title-wrapper" data-aos="fade-up">
        <h2 className="section-title">How Adiion Work</h2>
      </div>

      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-container ${index % 2 === 0 ? 'row' : 'row-reverse'}`}
          data-aos="fade-up"
        >
          <div className="image-container">
  <img src={step.image} alt={step.title} />
  <div className="image-overlay"></div>  {/* new overlay div */}
  <div className="overlay-title">{step.title}</div>
</div>

          <div className="description-container">
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowWeWork;
