import { useNavigate } from "react-router-dom";
import "../css/why.css";

function WhyChooseUs() {
  const navigate = useNavigate();
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Quick and safe delivery of plants across Pakistan."
    },
    {
      icon: "🌿",
      title: "Fresh Plants",
      text: "Healthy, premium quality plants carefully selected for you."
    },
    {
      icon: "💳",
      title: "Secure Payment",
      text: "Trusted and secure payment options for easy shopping."
    },
    {
      icon: "📞",
      title: "24/7 Support",
      text: "Our team is always ready to assist you anytime."
    }
  ];

  return (
    <section className="why">

      <div className="why-heading">
        <h2>Why Choose Evergreen Nursery?</h2>
        <p>
          We provide healthy plants, reliable service, and a better
          gardening experience for every plant lover.
        </p>
      </div>


      <div className="why-grid">

        {features.map((item, index) => (
         <div
  className="why-card"
  key={index}
  onClick={() => {
  if (item.title === "Fast Delivery") {
  navigate("/fast-delivery");
} else if (item.title === "Fresh Plants") {
  navigate("/fresh-plants");
} else if (item.title === "Secure Payment") {
  navigate("/secure-payment");
} else if (item.title === "24/7 Support") {
  navigate("/support");
}
  }}
>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;