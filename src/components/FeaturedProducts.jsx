import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function FeaturedProducts({ search = "", selectedCategory = "All" }) {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
const fetchProducts = async () => {
try {
const response = await fetch("https://evergreen-nursery-mjbg.vercel.app/api/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    setProducts(data);
  } catch (err) {
    console.error("Product Fetch Error:", err);
    setError("Unable to load products.");
  } finally {
    setLoading(false);
  }
};

fetchProducts();

}, []);

const filteredProducts = products.filter((item) => {
const searchText = search.toLowerCase();

const matchesSearch =
  item.name?.toLowerCase().includes(searchText) ||
  item.category?.toLowerCase().includes(searchText) ||
  item.description?.toLowerCase().includes(searchText);

const matchesCategory =
  selectedCategory === "All" ||
  selectedCategory === null ||
  item.category?.toLowerCase() === selectedCategory.toLowerCase();

return matchesSearch && matchesCategory;


});

if (loading) {
return ( <section className="featured-products"> <div className="section-heading"> <h2>Featured Products</h2> <p>Loading products...</p> </div> </section>
);
}

if (error) {
return ( <section className="featured-products"> <div className="section-heading"> <h2>Featured Products</h2> <p>{error}</p> </div> </section>
);
}

return ( <section className="featured-products"> <div className="section-heading"> <h2>Featured Products</h2> <p>
Discover our premium collection of plants and gardening essentials. </p> </div>

  <div className="product-grid">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))
    ) : (
      <h3>No Products Found</h3>
    )}
  </div>
</section>

);
}

export default FeaturedProducts;
