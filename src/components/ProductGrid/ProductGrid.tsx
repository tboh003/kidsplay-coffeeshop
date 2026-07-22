import React from 'react';
import { Product } from '../../types';
import { LANGUAGE } from '../../constants/language';
import { isImageIcon } from '../../utils/icon';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  // Define category order
  const categoryOrder = [
    LANGUAGE.CATEGORY_HOT_DRINKS,
    LANGUAGE.CATEGORY_COLD_DRINKS,
    LANGUAGE.CATEGORY_BAKED_GOODS,
    LANGUAGE.CATEGORY_SAVORY,
    LANGUAGE.CATEGORY_SWEETS
  ];

  return (
    <div className="product-grid">
      <div className="product-grid-title">{LANGUAGE.PRODUCTS_TITLE}</div>
      <div className="products-container">
        {categoryOrder.map((category) => {
          const categoryProducts = productsByCategory[category];
          if (!categoryProducts || categoryProducts.length === 0) return null;

          return (
            <div key={category} className="product-category">
              <div className="category-header">{category}</div>
              <div className="category-products">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-item"
                    onClick={() => onProductClick(product)}
                  >
                    <div className="product-icon">
                      {isImageIcon(product.icon) ? (
                        <img src={product.icon} alt="" className="product-icon-image" />
                      ) : (
                        product.icon
                      )}
                    </div>
                    <div className="product-price">{product.price} {LANGUAGE.CURRENCY}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
