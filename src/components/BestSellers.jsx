import products from "../data/products";
import ProductCard from "./ProductCard";

function BestSellers() {
  const bestProducts = products.slice(0, 4);

  return (
    <section className="featured-products">
      <div className="section-heading">
        <h2>Best Sellers</h2>
      </div>

      <div className="product-grid">
        {bestProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default BestSellers;