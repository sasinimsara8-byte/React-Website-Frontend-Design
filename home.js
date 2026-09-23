import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Natural Care, Healthy Life</h1>

          <p>
            Discover natural Ayurvedic products made
            with traditional herbs and natural ingredients.
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>


      <section className="products-section">
        <h2>Our Popular Products</h2>

        <div className="product-container">

          <div className="product-card">
            <div className="product-image">🌿</div>
            <h3>Herbal Oil</h3>
            <p>Natural herbal oil for everyday care.</p>
            <h4>Rs. 1,200</h4>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image">🌱</div>
            <h3>Herbal Soap</h3>
            <p>Gentle soap made with natural herbs.</p>
            <h4>Rs. 650</h4>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image">🍃</div>
            <h3>Herbal Tea</h3>
            <p>A refreshing traditional herbal tea.</p>
            <h4>Rs. 850</h4>
            <button>Add to Cart</button>
          </div>

        </div>
      </section>


      {/* About Ayurveda */}
      <section className="ayurveda-section">
        <div>
          <h2>Discover Ayurveda</h2>

          <p>
            Ayurveda is a traditional system of health and
            wellness that focuses on natural ingredients,
            balanced living and traditional knowledge.
          </p>

          <Link to="/about" className="learn-btn">
            Learn More
          </Link>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <h3>AyurLife</h3>
        <p>Natural products for a balanced lifestyle.</p>
        <p>© 2026 AyurLife. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;