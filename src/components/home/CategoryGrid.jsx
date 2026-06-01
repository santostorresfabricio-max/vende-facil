import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';
import '../../styles/CategoryCard.css';

const CategoryGrid = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container text-center mb-5">
        <h2 className="fw-bold mb-2">Explora nuestras categorías</h2>
        <p className="text-secondary">Encuentra exactamente lo que buscas en nuestra selección curada de productos</p>
      </div>
      
      <div className="container">
        <div className="row g-4">
          {categories.map((category) => (
            <div key={category.id} className="col-12 col-md-6 col-lg-4">
              <Link to={`/category/${category.id}`} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <h3 className="category-title">
                    <i className={`bi ${category.icon}`}></i> {category.name}
                  </h3>
                  <p className="category-desc">{category.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
