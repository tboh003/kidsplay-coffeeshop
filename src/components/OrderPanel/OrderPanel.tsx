import React from 'react';
import { Product } from '../../types';
import './OrderPanel.css';

interface OrderPanelProps {
  order: Product[];
  onRemoveProduct: (index: number) => void;
}

export const OrderPanel: React.FC<OrderPanelProps> = ({ order, onRemoveProduct }) => {
  const total = order.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="order-panel">
      <div className="order-title">Current Order</div>
      <div className="order-items">
        {order.length === 0 ? (
          <div className="empty-order">No items yet</div>
        ) : (
          order.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="order-item"
              onClick={() => onRemoveProduct(index)}
            >
              <span className="order-item-icon">{product.icon}</span>
              <span className="order-item-price">{product.price} Kč</span>
            </div>
          ))
        )}
      </div>
      <div className="order-total">
        <div className="total-label">Total:</div>
        <div className="total-amount">{total} Kč</div>
      </div>
    </div>
  );
};
