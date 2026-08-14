import "../css/reviews.css";

function Reviews() {
  return (
    <section className="reviews">

      <h2>What Our Customers Say</h2>

      <div className="review-grid">

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            Amazing quality plants. They arrived fresh and healthy.
          </p>
          <h4>- Ayesha</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            Fast delivery and excellent customer support.
          </p>
          <h4>- Ali</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            My favorite nursery. Highly recommended.
          </p>
          <h4>- Sara</h4>
        </div>

      </div>

    </section>
  );
}

export default Reviews;