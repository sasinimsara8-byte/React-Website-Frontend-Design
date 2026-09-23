import React from 'react';
import "./App.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About AyurLife</h1>
        <p>
          Natural care inspired by the traditional wisdom of Ayurveda.
        </p>
      </section>


      <section className="about-content">

        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            Welcome to AyurLife, your simple destination for
            Ayurvedic and natural products.
          </p>

          <p>
            We believe in the value of natural ingredients and
            traditional Ayurvedic knowledge. Our goal is to make
            quality herbal products easily accessible to everyone.
          </p>

          <p>
            We offer a range of products such as herbal oils,
            herbal soaps, herbal teas and other natural products.
          </p>
        </div>

        <div className="about-image">
          🌿
        </div>

      </section>


      {/* Our Values */}
      <section className="values">

        <h2>Why Choose AyurLife?</h2>

        <div className="value-container">

          <div className="value-card">
            <div>🌱</div>
            <h3>Natural Products</h3>
            <p>
              Products made with natural and herbal ingredients.
            </p>
          </div>

          <div className="value-card">
            <div>🌿</div>
            <h3>Ayurvedic Tradition</h3>
            <p>
              Inspired by traditional Ayurvedic knowledge.
            </p>
          </div>

          <div className="value-card">
            <div>❤️</div>
            <h3>Customer Care</h3>
            <p>
              We care about providing a simple and friendly
              shopping experience.
            </p>
          </div>

        </div>

      </section>


      {/* Mission */}
      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          Our mission is to connect people with natural products
          and promote a balanced and healthy lifestyle through
          traditional Ayurvedic wisdom.
        </p>

      </section>

    </div>
  );
}

export default About;