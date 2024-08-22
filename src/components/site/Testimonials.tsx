import React from 'react';
import './globals.css'; // Import the specific stylesheet

const testimonials = [
  {
    name: 'Ahmed B.',
    feedback: 'The food quality is exceptional, and the service is always on point. I’m proud to be a franchisee of DZ Food!',
    location: 'Alger Center',
  },
  {
    name: 'Fatima Z.',
    feedback: 'DZ Food has completely changed my perception of fast food. The freshness and taste are unparalleled!',
    location: 'Oran',
  },
  {
    name: 'Omar R.',
    feedback: 'Joining DZ Food as a franchisee was the best decision I’ve ever made. The support and training are top-notch.',
    location: 'Constantine',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonialsSection">
      <div className="testimonialsContainer">
        <h2 className="testimonialsTitle">What Our Customers Say</h2>
        <p className="testimonialsIntro">
          Read testimonials from our satisfied clients and franchisees.
        </p>

        <div className="testimonialsCarousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <p className="testimonialFeedback">“{testimonial.feedback}”</p>
              <h3 className="testimonialName">{testimonial.name}</h3>
              <p className="testimonialLocation">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
