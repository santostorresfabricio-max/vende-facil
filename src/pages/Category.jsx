import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { categories, products } from '../data/mockData';

const Category = () => {
  const { categoryId } = useParams();
  
  // Find category details
  const category = categories.find(c => c.id === categoryId);
  
  // If category doesn't exist, redirect to home
  if (!category) {
    return <Navigate to="/" replace />;
  }

  // Filter products by category
  const categoryProducts = products.filter(p => p.category === categoryId);

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Category Header */}
      <div className="bg-dark-custom text-white py-5 mb-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5 mb-3">
            <i className={`bi ${category.icon} me-3`}></i>
            {category.name}
          </h1>
          <p className="lead text-white-50 mb-4">{category.description}</p>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/" className="text-white text-decoration-none">Inicio</Link></li>
              <li className="breadcrumb-item active text-white-50" aria-current="page">{category.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0">Mostrando {categoryProducts.length} productos</h4>
          
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ordenar por
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0">
              <li><button className="dropdown-item">Relevancia</button></li>
              <li><button className="dropdown-item">Precio: Menor a Mayor</button></li>
              <li><button className="dropdown-item">Precio: Mayor a Menor</button></li>
            </ul>
          </div>
        </div>

        <div className="row g-4">
          {categoryProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
