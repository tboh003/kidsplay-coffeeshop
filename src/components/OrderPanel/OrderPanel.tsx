import React from 'react';
import { Product } from '../../types';
import { LANGUAGE } from '../../constants/language';
import './OrderPanel.css';

interface OrderPanelProps {
  order: Product[];
  onRemoveProduct: (index: number) => void;
}

export const OrderPanel: React.FC<OrderPanelProps> = ({ order, onRemoveProduct }) => {
  return (
    <div className="order-panel">
      <div className="order-title">{LANGUAGE.ORDER_TITLE}</div>
      <div className="order-items">
        {order.length === 0 ? (
          <div className="empty-order">{LANGUAGE.ORDER_EMPTY}</div>
        ) : (
          order.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="order-item"
              onClick={() => onRemoveProduct(index)}
            >
              <span className="order-item-icon">{product.icon}</span>
              <span className="order-item-price">{product.price} {LANGUAGE.CURRENCY}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
