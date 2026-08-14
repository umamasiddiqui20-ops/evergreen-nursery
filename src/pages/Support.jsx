import "../css/service.css";
import { Link } from "react-router-dom";
function Support() {
  return (
    <section className="service-page">

      <h1> 24/7 Customer Support</h1>

      <p>
        Our customer support team is available 24 hours a day, 7 days a week
        to help you with your gardening needs.
      </p>

      <h2>We Can Help You With</h2>

      <ul>
        <li> Plant care guidance</li>
        <li> Order tracking</li>
        <li> Payment assistance</li>
        <li> Returns & refunds</li>
        <li> General customer support</li>
      </ul>

      <h2>Need Help?</h2>

      <p>
        Contact us anytime. Our friendly support team is always ready to
        answer your questions and provide the best assistance.
      </p>
      <div className="service-cards">

  <div className="service-card">
    <span>⭐</span>
    <h3>Premium Quality</h3>
    <p>We always provide the best quality products.</p>
  </div>

  <div className="service-card">
    <span>🌱</span>
    <h3>Eco Friendly</h3>
    <p>Healthy and environmentally friendly gardening.</p>
  </div>

  <div className="service-card">
    <span>🤝</span>
    <h3>Trusted Service</h3>
    <p>Thousands of happy customers across Pakistan.</p>
  </div>

</div>
      <div className="service-buttons">

  <Link to="/">
    <button className="home-btn">
      ← Back to Home
    </button>
  </Link>

  <Link to="/shop">
    <button className="shop-btn-service">
      Shop Now →
    </button>
  </Link>

</div>

    </section>
  );
}

export default Support;