import "../css/service.css";
import { Link } from "react-router-dom";
function FreshPlants() {
  return (
    <section className="service-page">

      <h1>Fresh Plants</h1>

      <p>
        Evergreen Nursery provides fresh, healthy, and premium quality plants
        that are carefully selected and nurtured before delivery.
      </p>

      <h2>Why Our Plants Are Fresh?</h2>

      <ul>
        <li>Healthy and disease-free plants</li>
        <li> Proper sunlight and watering care</li>
        <li> Grown in quality soil and compost</li>
        <li> Carefully packed before shipping</li>
        <li> Long-lasting freshness guaranteed</li>
      </ul>

      <h2>Our Promise</h2>

      <p>
        We believe every customer deserves healthy plants that make their
        home and garden more beautiful.
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

export default FreshPlants;