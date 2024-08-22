import React from 'react';
import './globals.css'; // Import the specific stylesheet

const eventsList = [
  {
    name: 'Summer Food Festival',
    date: 'August 30, 2024',
    location: 'Place de la République, Alger',
    description: 'Join us at the Summer Food Festival to enjoy a variety of delicious street food from our carts.',
  },
  {
    name: 'Corporate Catering Event',
    date: 'September 10, 2024',
    location: 'Business District, Alger',
    description: 'Our carts will be serving at a major corporate event, offering exclusive menu items tailored for business professionals.',
  },
  {
    name: 'Community Block Party',
    date: 'October 5, 2024',
    location: 'Rue Didouche Mourad, Alger',
    description: 'Celebrate with us at the Community Block Party, where our carts will be offering special discounts and kids’ meals.',
  },
];

const Events = () => {
  return (
    <section id="events" className="eventsSection">
      <div className="eventsContainer">
        <h2 className="eventsTitle">Upcoming Events</h2>
        <p className="eventsDescription">Check out where our carts will be featured next and how you can book a cart for your event.</p>
        
        <div className="eventsGrid">
          {eventsList.map((event, index) => (
            <div key={index} className="eventCard">
              <h3 className="eventName">{event.name}</h3>
              <p className="eventDate">{event.date}</p>
              <p className="eventLocation">{event.location}</p>
              <p className="eventDescription">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="eventsCallToAction">
          <p className="ctaText">Want to book a cart for your event?</p>
          <a href="/booking" className="ctaButton">Book Now</a>
        </div>
      </div>
    </section>
  );
};

export default Events;
