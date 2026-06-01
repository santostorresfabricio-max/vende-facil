import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartOffcanvas from '../cart/CartOffcanvas';
import '../../styles/Navbar.css';

const Navbar = () => {
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-custom py-3">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span className="brand-text">VendeFácil</span>
          </Link>

          {/* Categories Dropdown (Desktop) */}
          <div className="dropdown ms-4 d-none d-lg-block">
            <button className="btn btn-link text-dark text-decoration-none dropdown-toggle px-0" type="button" id="categoriesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <small className="fw-semibold">Categorías</small>
            </button>
            <ul className="dropdown-menu shadow-sm border-0" aria-labelledby="categoriesDropdown">
              <li><Link className="dropdown-item" to="/category/electronicos">Electrónicos</Link></li>
              <li><Link className="dropdown-item" to="/category/ropa">Ropa</Link></li>
              <li><Link className="dropdown-item" to="/category/accesorios">Accesorios</Link></li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Search Bar */}
            <form className="d-flex mx-auto my-3 my-lg-0 w-100" style={{ maxWidth: '500px' }}>
              <div className="position-relative w-100">
                <i className="bi bi-search search-icon"></i>
                <input className="form-control search-input" type="search" placeholder="Buscar productos..." aria-label="Search" />
              </div>
            </form>

            {/* User Actions */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center flex-row justify-content-center gap-4">
              <li className="nav-item">
                <button 
                  className="nav-link nav-icon-btn position-relative bg-transparent border-0"
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#cartOffcanvas"
                >
                  <i className="bi bi-cart3"></i>
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                      {cartCount}
                    </span>
                  )}
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-icon-btn d-flex align-items-center gap-2" to="/">
                  <i className="bi bi-person"></i>
                  <small className="d-none d-lg-block fw-medium">Mi cuenta</small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Offcanvas Component */}
      <CartOffcanvas />
    </>
  );
};

export default Navbar;
