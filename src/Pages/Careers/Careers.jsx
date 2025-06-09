import React from 'react';
import './Careers.css';
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Scroll to top on mount
  }, []);
  return (
    <div className="careers">
      <div className="careers-banner">
        <div className="overlay-text">
          <h1>Join Our Team at Adiion</h1>
          <p>Innovate. Collaborate. Grow with us.</p>
        </div>
      </div>

      <section className="full-width-section intro">
        <div className="section-inner">
          <h2>Welcome to Adiion Careers</h2>
          <p>
            We're on a mission to deliver cutting-edge solutions in SaaS, IT, BPO, Cybersecurity, and AI Automation.
            Whether you're a developer, designer, marketer, or customer support professional — there's a place for you here.
            Grow your career while shaping the future of technology.
          </p>
        </div>
      </section>

      <section className="full-width-section why-us">
        <div className="section-inner">
          <h2>Why Work With Us</h2>
          <ul>
            <li><strong>Innovative Projects:</strong> Build next-gen SaaS platforms, automation tools, and enterprise software.</li>
            <li><strong>Career Growth:</strong> Learn from experts, gain certifications, and explore multiple career paths.</li>
            <li><strong>Flexible Work Culture:</strong> Remote-friendly, inclusive, and collaborative environment.</li>
          </ul>
        </div>
      </section>

      <section className="full-width-section openings">
        <div className="section-inner">
          <h2>We’re Hiring – Explore Open Positions</h2>
          <div className="job-listing">
            <div className="job-card">
              <h3>Software Developer</h3>
              <p><strong>Location:</strong> Remote / Chennai</p>
              <p><strong>Experience:</strong> 2+ Years</p>
              <p>Work with Python, Node.js, or React to build robust SaaS and BPO platforms.</p>
              <p><strong>Apply:</strong> hr@adiion.com</p>
            </div>
            <div className="job-card">
              <h3>Digital Marketing Specialist</h3>
              <p><strong>Location:</strong> Remote</p>
              <p><strong>Experience:</strong> 1–3 Years</p>
              <p>Plan, execute, and optimize digital campaigns for B2B SaaS, outsourcing, and research clients.</p>
              <p><strong>Apply:</strong> hr@adiion.com</p>
            </div>
            <div className="job-card">
                <h3>Human Resources Executive</h3>
                 <p><strong>Location:</strong> Remote / Chennai</p>
                 <p><strong>Experience:</strong> 2–4 Years</p>
                 <p>Manage recruitment, onboarding, employee engagement, and HR operations. Support team growth and uphold company culture across remote and on-site teams.</p>
                 <p><strong>Apply:</strong> hr@adiion.com</p>
              </div>
          </div>
        </div>
      </section>

      <section className="full-width-section open-call">
        <div className="section-inner">
          <h2>We’re Always Hiring Passionate People</h2>
          <p>
            Didn’t find a role that fits your profile? Share your resume with us at <strong>hr@adiion.com</strong> and we’ll get in touch when something suitable comes up.
          </p>
        </div>
      </section>

      <section className="full-width-section culture">
        <div className="section-inner">
          <h2>Life at Adiion</h2>
          <p>
            We believe in teamwork, transparency, and continuous improvement.
            Whether remote or in-office, we ensure everyone has access to mentorship, collaboration tools, and learning opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
