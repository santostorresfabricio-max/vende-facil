import React from 'react';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/mockData';

const ProductGrid = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container text-center mb-5">
        <h2 className="fw-bold mb-2">Productos destacados</h2>
        <p className="text-secondary">Nuestra selección especial para ti</p>
      </div>
      
      <div className="container">
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
