import "../css/service.css";
import { Link } from "react-router-dom";
function SecurePayment() {
  return (
    <section className="service-page">

      <h1>Secure Payment</h1>

      <p>
        Your payment security is our top priority. We provide safe and reliable
        payment methods for a worry-free shopping experience.
      </p>

      <h2>Payment Options</h2>

      <ul>
        <li> Cash on Delivery (COD)</li>
        <li> Debit & Credit Cards</li>
        <li> Bank Transfer</li>
        <li> Mobile Wallets</li>
      </ul>

      <h2>Why Shop With Us?</h2>

      <p>
        Every transaction is protected to ensure your personal and payment
        information remains secure.
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

export default SecurePayment;