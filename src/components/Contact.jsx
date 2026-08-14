import "../css/contact.css";
import { useState } from "react";


function Contact() {
  const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubscribe = () => {
  if (email.trim() === "") {
    setMessage("❌ Please enter your email.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    setMessage("❌ Please enter a valid email address.");
    return;
  }

  setMessage("✅ Thank you! You have successfully subscribed to the Evergreen Nursery Newsletter.");

  setEmail("");

  setTimeout(() => {
    setMessage("");
  }, 4000);
};


  return (
    <>
    {message && (
  <div
    className={`toast-message ${
      message.startsWith("✅") ? "success-toast" : "error-toast"
    }`}
  >
    {message}
  </div>
)}


      



      <section className="contact-section">


        <div className="contact-container">


          <div className="contact-content">


            <h2>
              Grow Your Garden With Us 🌿
            </h2>



            <p>
              Get expert gardening tips, fresh plants, and quality products
              delivered to your doorstep.
            </p>




            <div className="contact-info">


              <div>

                <h4>
                  📍 Location
                </h4>

                <p>
                  Karachi, Pakistan
                </p>

              </div>




              <div>

                <h4>
                  📞 Phone
                </h4>

                <p>
                  +92 300 0000000
                </p>

              </div>




              <div>

                <h4>
                  ✉ Email
                </h4>

                <p>
                  info@evergreennursery.com
                </p>

              </div>



            </div>


          </div>





          <div className="newsletter-box">


            <h3>
              Subscribe Newsletter
            </h3>



            <p>
              Join us and receive gardening updates & offers.
            </p>




            <div className="email-box">


              <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>


             <button onClick={handleSubscribe}>
  Subscribe
</button>

            </div>



          </div>



        </div>


      </section>




      


    </>
  );
}


export default Contact;