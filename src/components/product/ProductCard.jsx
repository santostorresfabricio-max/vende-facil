import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    addToCart(product);
    // Opcional: Podríamos mostrar un pequeño toast aquí para confirmar que se añadió
  };

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        {product.badge && (
          <span className={`product-badge bg-${product.badge.color}`}>
            {product.badge.text}
          </span>
        )}
        <img src={product.image} alt={product.name} className="product-img" />
        
        {/* Hover Actions */}
        <div className="product-hover-actions">
          <button className="action-btn" title="Vista rápida">
            <i className="bi bi-eye"></i>
          </button>
          <button className="action-btn btn-cart" title="Añadir al carrito" onClick={handleAddToCart}>
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to="/" className="product-title">
          {product.name}
        </Link>
        
        <div className="product-rating">
          {renderStars(product.rating)}
          <span className="product-reviews">({product.reviews})</span>
        </div>
        
        <div className="mb-3">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <button className="btn-add-to-cart mt-auto" onClick={handleAddToCart}>
          <i className="bi bi-cart2 me-2"></i>Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
