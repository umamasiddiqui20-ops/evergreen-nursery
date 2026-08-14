import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const productId = product._id || product.id;

  const isInStock =
    typeof product.stock === "number"
      ? product.stock > 0
      : product.stock === "In Stock";

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={
            product.image?.startsWith("http")
              ? product.image
              : product.image
          }
          alt={product.name}
        />

        <span className="stock-badge">
          {isInStock ? "In Stock" : "Out of Stock"}
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
            to={`/product/${productId}`}
            className="details-link"
          >
            <button className="details-btn">
              View Details
            </button>
          </Link>

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
            disabled={!isInStock}
          >
            {isInStock ? "Add to Cart" : "Out of Stock"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;