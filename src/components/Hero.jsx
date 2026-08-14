import heroVideo from "../assets/logo/hero-video.mp4";
import { Link } from "react-router-dom";
import logoDesign from "../assets/logo/logo-design.png";

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tag">
            <img
              src={logoDesign}
              alt="Evergreen Logo"
              className="hero-tag-icon"
            />
            <span>Welcome to Evergreen Nursery</span>
          </span>

          <h1>
            Growing Nature,
            <br />
            Enriching Life
          </h1>

          <p>
            Discover premium indoor plants, outdoor plants, seeds,
            gardening tools, cocopeat, compost and everything
            you need to create your own green paradise.
          </p>

          <div className="hero-buttons">
            <Link to="/shop">
              <button className="shop-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;