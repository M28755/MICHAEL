
import { useState } from "react";
export const NewsletterCard = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="newsletter-card">
      <h2 className="widget-title">Stay Updated</h2>
      <p className="newsletter-text">Get the latest articles sent to your inbox. No spam.</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          required
          placeholder="Email address"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
    </div>
  );
};