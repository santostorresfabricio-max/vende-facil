import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../../styles/CartOffcanvas.css';

const CartOffcanvas = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title fw-bold" id="cartOffcanvasLabel">
          <i className="bi bi-cart3 me-2"></i>Tu Carrito
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
      </div>
      
      <div className="offcanvas-body p-0 d-flex flex-column">
        {cartItems.length === 0 ? (
          <div className="p-5 text-center text-muted m-auto">
            <i className="bi bi-cart-x display-1 mb-3"></i>
            <h5>Tu carrito está vacío</h5>
            <p className="small">¡Explora nuestro catálogo y añade productos increíbles!</p>
            <button className="btn btn-outline-primary mt-2" data-bs-dismiss="offcanvas">
              Ir de compras
            </button>
          </div>
        ) : (
          <div className="flex-grow-1 overflow-auto px-3">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <span className="cart-item-title">{item.name}</span>
                  <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  
                  <div className="d-flex align-items-center mt-auto">
                    <div className="cart-quantity-controls">
                      <button 
                        className="btn-quantity" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span className="small fw-medium mx-1">{item.quantity}</span>
                      <button 
                        className="btn-quantity"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                    
                    <button 
                      className="btn-remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-semibold">Subtotal</span>
              <span className="fw-bold fs-5">${getCartTotal().toFixed(2)}</span>
            </div>
            <button className="btn btn-primary w-100 py-2 fw-semibold mb-2">
              Proceder al pago
            </button>
            <button className="btn btn-outline-secondary w-100 py-2" data-bs-dismiss="offcanvas">
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartOffcanvas;
