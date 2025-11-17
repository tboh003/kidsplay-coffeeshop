import React from 'react';
import { Product } from '../../types';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <div className="product-grid">
      <div className="product-grid-title">Products</div>
      <div className="products-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => onProductClick(product)}
          >
            <div className="product-icon">{product.icon}</div>
            <div className="product-price">{product.price} Kč</div>
          </div>
        ))}
      </div>
    </div>
  );
};
