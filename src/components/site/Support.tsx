import React from 'react';
import './globals.css'; // Import the specific stylesheet

const faqs = [
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact our customer support team via email at support@dzfood.com or call us at +213 123 456 789.',
  },
  {
    question: 'What are the operating hours of your support team?',
    answer: 'Our support team is available from Monday to Friday, 9:00 AM to 6:00 PM.',
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by logging into your account and checking the order status in the "My Orders" section.',
  },
];

const Support = () => {
  return (
    <section id="support" className="supportSection">
      <div className="supportContainer">
        <h2 className="supportTitle">Support</h2>
        <p className="supportDescription">Have questions? Reach out to our support team or check out our FAQ for answers.</p>
        
        <div className="supportOptions">
          <div className="contactForm">
            <h3>Contact Us</h3>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required></textarea>
              
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="faqSection">
            <h3>Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="faqItem">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
