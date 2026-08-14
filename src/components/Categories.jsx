import { useNavigate } from "react-router-dom";
import categories from "../data/categories";

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="categories">
      <div className="section-heading">
        <h2>Shop By Category</h2>
        <p>Explore our wide range of plants and gardening essentials.</p>
      </div>

      <div className="category-grid">
        {categories.map((item) => (
          <div className="category-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="category-overlay">
              <h3>{item.name}</h3>

              <button
                type="button"
                onClick={() => handleCategoryClick(item.name)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;