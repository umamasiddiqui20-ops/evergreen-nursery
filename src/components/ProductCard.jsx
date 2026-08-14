import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

      <div className="product-image">
       <img
  src={`http://localhost:5173${product.image}`}
  alt={product.name}
/>

        <span className="stock-badge">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>5.0</span>
        </div>

        <div className="price-row">
          <h2>Rs. {product.price}</h2>
        </div>

        <div className="product-buttons">

          <Link
            to={`/product/${product._id}`}
            className="details-link"
          >
            <button className="details-btn">
              View Details
            </button>
          </Link>

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;