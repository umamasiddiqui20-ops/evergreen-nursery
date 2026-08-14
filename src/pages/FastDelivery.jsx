import "../css/service.css";
import { Link } from "react-router-dom";
function FastDelivery() {
  return (
    <section className="service-page">

      <h1>Fast Delivery</h1>

      <p>
        At Evergreen Nursery, we ensure your plants and gardening products
        reach your doorstep quickly and safely.
      </p>

      <h2>Our Delivery Features</h2>

      <ul>
        <li> Delivery across Pakistan</li>
        <li> Safe and secure packaging</li>
        <li> Delivery within 2–5 working days</li>
        <li> Plants delivered in healthy condition</li>
        <li> Order tracking available</li>
      </ul>

      <h2>Why Choose Our Delivery?</h2>

      <p>
        We carefully pack every plant to protect it during transportation,
        ensuring it arrives fresh, healthy, and ready for your home or garden.
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

export default FastDelivery;