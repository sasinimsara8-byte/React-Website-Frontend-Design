import React from "react";
import "./App.css";

function Services() {
  return (
    <div className="services-page">

      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Supporting your natural wellness journey with Ayurvedic products
        </p>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>

        <div className="services-container">

          <div className="service-card">
            <div className="service-icon">🌿</div>
            <h3>Ayurvedic Products</h3>
            <p>
              Explore a range of traditional Ayurvedic and herbal products
              selected for natural wellness.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>Easy Online Shopping</h3>
            <p>
              Browse our products and place your orders easily through our
              simple online shopping system.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Product Delivery</h3>
            <p>
              We provide convenient product delivery so customers can receive
              their orders at their preferred location.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💚</div>
            <h3>Product Guidance</h3>
            <p>
              Get basic information about our products to help you choose
              products that match your needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⭐</div>
            <h3>Quality Products</h3>
            <p>
              We focus on offering quality Ayurvedic products and a reliable
              shopping experience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🤝</div>
            <h3>Customer Support</h3>
            <p>
              Our customer support helps answer questions and provides
              assistance with orders and products.
            </p>
          </div>

        </div>
      </section>

      {/* Wellness Section */}
      <section className="wellness-section">

        <div className="wellness-content">
          <h2>Your Wellness, Our Care</h2>

          <p>
            We aim to make Ayurvedic products more accessible through a
            convenient online shopping experience.
          </p>

          <p>
            Discover natural products and learn more about traditional
            Ayurvedic wellness.
          </p>

          <button>Shop Now</button>
        </div>

      </section>

    </div>
  );
}

export default Services;