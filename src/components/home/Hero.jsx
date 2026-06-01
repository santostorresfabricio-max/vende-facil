import React from 'react';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-badge">
          <i className="bi bi-stars"></i>
          <span>Envío gratis en compras mayores a $50</span>
        </div>
        
        <h1 className="hero-title">
          Tus productos favoritos a un clic
        </h1>
        
        <p className="hero-subtitle">
          Descubre una amplia selección de electrónicos, ropa y accesorios de las mejores marcas. Compra con confianza y recibe en la comodidad de tu hogar.
        </p>
        
        <div className="d-flex flex-wrap gap-3">
          <button className="btn btn-primary px-4 py-2 fw-semibold d-flex align-items-center gap-2">
            Explorar catálogo <i className="bi bi-arrow-right"></i>
          </button>
          <button className="btn btn-hero-secondary px-4 py-2 fw-semibold">
            Ver ofertas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
