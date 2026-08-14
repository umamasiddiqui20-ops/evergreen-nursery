import logo from "../assets/logo/logo.png";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

       <div className="footer-about">

  <img
    src={logo}
    alt="Evergreen Nursery Logo"
    className="footer-logo"
  />

  <h2>Evergreen Nursery</h2>

  <p>
    Bringing nature closer to your home with fresh plants,
    gardening tools, and quality care products.
  </p>

</div>


        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>

        </div>


        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📍 Karachi, Pakistan</p>
          <p>📞 +92 300 0000000</p>
          <p>✉ info@evergreennursery.com</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Evergreen Nursery. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;