import React from "react";
import "./_Pages.css";

const testimonials = [
  {
    name: "Jane Smith",
    company: "Acme Corp",
    quote: "Working with Kainen was a fantastic experience. The project was delivered on time and exceeded our expectations!",
    photo: "https://via.placeholder.com/80?text=JS"
  },
  {
    name: "Michael Lee",
    company: "Beta Solutions",
    quote: "Kainen's attention to detail and creative problem-solving made all the difference for our product launch.",
    photo: "https://via.placeholder.com/80?text=ML"
  },
  {
    name: "Priya Patel",
    company: "Gamma Innovations",
    quote: "Professional, responsive, and highly skilled. I would recommend Kainen to anyone looking for a top-tier developer.",
    photo: "https://via.placeholder.com/80?text=PP"
  }
];

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* ...existing homepage content... */}
      <section className="testimonials-section">
        <h2>What Clients Say</h2>
        <div className="testimonials-list">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <img src={t.photo} alt={t.name + ' photo'} className="testimonial-photo" />
              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
              <div className="testimonial-client">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-company">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ...existing homepage content... */}
    </div>
  );
};

export default Homepage;
