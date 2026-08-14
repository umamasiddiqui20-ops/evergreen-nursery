import "./css/login.css";
import "./css/checkout.css";
import "./css/navbar.css";
import "./css/hero.css";
import "./css/categories.css";
import "./css/products.css";
import "./css/productDetails.css";
import "./css/contact.css";

// Lib
import { Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

// Pages
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import FastDelivery from "./pages/FastDelivery";
import FreshPlants from "./pages/FreshPlants";
import SecurePayment from "./pages/SecurePayment";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <Navbar />

<ScrollToTop />

<Routes>

</Routes>

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Why Choose Us Pages */}
        <Route path="/fast-delivery" element={<FastDelivery />} />
        <Route path="/fresh-plants" element={<FreshPlants />} />
        <Route path="/secure-payment" element={<SecurePayment />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;