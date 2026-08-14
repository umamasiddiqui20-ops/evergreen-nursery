import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const foundProduct = data.find(
          (item) => item._id === id
        );

        if (!foundProduct) {
          setError("Product Not Found");
          return;
        }

        setProduct(foundProduct);
      } catch (err) {
        console.error("Product Details Error:", err);
        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="details">
        <h2>Loading product...</h2>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="details">
        <h2>{error || "Product Not Found"}</h2>
      </section>
    );
  }

  return (
    <section className="details">

      {/* IMAGE SECTION */}

      <div className="details-image">

        <div className="details-main-image">

          <img
            src={`http://localhost:5173${product.image}`}
            alt={product.name}
            className={currentImage === 1 ? "zoom-image" : ""}
          />

        </div>

        {/* THUMBNAILS */}

        <div className="image-thumbnails">

          <button
            type="button"
            className={`thumbnail ${
              currentImage === 0 ? "active" : ""
            }`}
            onClick={() => setCurrentImage(0)}
          >
            <img
              src={`http://localhost:5173${product.image}`}
              alt={product.name}
            />
          </button>

          <button
            type="button"
            className={`thumbnail ${
              currentImage === 1 ? "active" : ""
            }`}
            onClick={() => setCurrentImage(1)}
          >
            <img
              src={`http://localhost:5173${product.image}`}
              alt={product.name}
            />
          </button>

        </div>

        {/* DOTS */}

        <div className="slider-dots">

          <button
            type="button"
            className={`slider-dot ${
              currentImage === 0 ? "active" : ""
            }`}
            onClick={() => setCurrentImage(0)}
          />

          <button
            type="button"
            className={`slider-dot ${
              currentImage === 1 ? "active" : ""
            }`}
            onClick={() => setCurrentImage(1)}
          />

        </div>

      </div>


      {/* PRODUCT DETAILS */}

      <div className="details-content">

        <p className="category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <h2>Rs. {product.price}</h2>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        {product.sunlight && (
          <p>
            <strong>Sunlight:</strong> {product.sunlight}
          </p>
        )}

        {product.watering && (
          <p>
            <strong>Watering:</strong> {product.watering}
          </p>
        )}

        <p>
          <strong>Status:</strong>{" "}
          {product.stock > 0
            ? "In Stock"
            : "Out of Stock"}
        </p>

        <p>{product.description}</p>


        {/* BUTTONS */}

        <div className="details-buttons">

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
            disabled={product.stock <= 0}
          >
            {product.stock > 0
              ? "Add to Cart"
              : "Out of Stock"}
          </button>

          <button
            className="buy-btn"
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
            disabled={product.stock <= 0}
          >
            Buy Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;