import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark-custom text-white pt-5">
      {/* Top Features */}
      <div className="container pb-4 footer-features">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-3 feature-item">
              <div className="feature-icon-box">
                <i className="bi bi-truck"></i>
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Envío gratis</h6>
                <small className="text-secondary">En compras mayores a $50</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-3 feature-item">
              <div className="feature-icon-box">
                <i className="bi bi-credit-card"></i>
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Pago seguro</h6>
                <small className="text-secondary">100% protegido</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-3 feature-item">
              <div className="feature-icon-box">
                <i className="bi bi-headset"></i>
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Soporte 24/7</h6>
                <small className="text-secondary">Siempre disponibles</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand & Social */}
          <div className="col-lg-4 pe-lg-5">
            <h4 className="fw-bold mb-3">VendeFácil</h4>
            <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
              Tu tienda de confianza para electrónicos, ropa y accesorios de calidad.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="social-btn" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-btn" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-btn" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold mb-4">Enlaces rápidos</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Sobre nosotros</Link></li>
              <li><Link to="/" className="footer-link">Catálogo</Link></li>
              <li><Link to="/" className="footer-link">Ofertas</Link></li>
              <li><Link to="/" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-4">Servicio al cliente</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Contacto</Link></li>
              <li><Link to="/" className="footer-link">Envíos</Link></li>
              <li><Link to="/" className="footer-link">Devoluciones</Link></li>
              <li><Link to="/" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal & Payment Methods */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-4">Legal</h6>
            <ul className="list-unstyled mb-4">
              <li><Link to="/" className="footer-link">Términos y condiciones</Link></li>
              <li><Link to="/" className="footer-link">Política de privacidad</Link></li>
            </ul>
            
            <h6 className="fw-bold mb-3">Métodos de pago</h6>
            <div className="d-flex gap-2 flex-wrap">
              <span className="payment-badge">Visa</span>
              <span className="payment-badge">Mastercard</span>
              <span className="payment-badge">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
