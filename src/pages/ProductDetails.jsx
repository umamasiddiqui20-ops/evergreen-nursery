import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        /*
          First check local products.
          Best Sellers use products.js
          and their IDs are 1, 2, 3, 4...
        */

        const localProduct = products.find(
          (item) => String(item.id) === String(id)
        );

        if (localProduct) {
          setProduct(localProduct);
          setLoading(false);
          return;
        }

        /*
          If product is not a local product,
          try MongoDB/backend.
        */

        const response = await fetch(
          "https://evergreen-nursery-mjbg.vercel.app/api/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const foundProduct = data.find(
          (item) => String(item._id) === String(id)
        );

        if (!foundProduct) {
          setError("Product Not Found");
          return;
        }

        setProduct(foundProduct);

      } catch (err) {
        console.error("Product Details Error:", err);

        /*
          If backend is unavailable, show local product
          if one exists.
        */

        const localProduct = products.find(
          (item) => String(item.id) === String(id)
        );

        if (localProduct) {
          setProduct(localProduct);
          setError("");
        } else {
          setError("Unable to load product.");
        }

      } finally {
        setLoading(false);
      }
    };

    loadProduct();
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

  const isInStock =
    typeof product.stock === "number"
      ? product.stock > 0
      : product.stock === "In Stock";

  const productImages = product.images?.length
    ? product.images
    : [product.image, product.image];

  return (
    <section className="details">

      {/* IMAGE SECTION */}

      <div className="details-image">

        <div className="details-main-image">

          <img
            src={productImages[currentImage]}
            alt={product.name}
            className={currentImage === 1 ? "zoom-image" : ""}
          />

        </div>

        {/* THUMBNAILS */}

        <div className="image-thumbnails">

          {productImages.slice(0, 2).map((image, index) => (
            <button
              key={index}
              type="button"
              className={`thumbnail ${
                currentImage === index ? "active" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
              />
            </button>
          ))}

        </div>

        {/* DOTS */}

        <div className="slider-dots">

          {productImages.slice(0, 2).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot ${
                currentImage === index ? "active" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}

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
          {isInStock ? "In Stock" : "Out of Stock"}
        </p>

        <p>
          {product.description}
        </p>


        {/* BUTTONS */}

        <div className="details-buttons">

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
            disabled={!isInStock}
          >
            {isInStock
              ? "Add to Cart"
              : "Out of Stock"}
          </button>

          <button
            className="buy-btn"
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
            disabled={!isInStock}
          >
            Buy Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;