import React from 'react';
import { availableCustomerIcons } from '../../data/customers';
import './CustomerSelector.css';

interface CustomerSelectorProps {
  onSelectIcon: (icon: string, name: string) => void;
  onClose: () => void;
}

export const CustomerSelector: React.FC<CustomerSelectorProps> = ({ onSelectIcon, onClose }) => {
  const handleSelect = (icon: string, name: string) => {
    onSelectIcon(icon, name);
    onClose();
  };

  return (
    <div className="customer-selector-overlay" onClick={onClose}>
      <div className="customer-selector-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Choose a Customer</h2>
        <div className="customer-icon-grid">
          {availableCustomerIcons.map((customer) => (
            <button
              key={customer.icon}
              className="customer-icon-button"
              onClick={() => handleSelect(customer.icon, customer.name)}
            >
              <span className="customer-icon-large">{customer.icon}</span>
              <span className="customer-icon-name">{customer.name}</span>
            </button>
          ))}
        </div>
        <button className="close-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
