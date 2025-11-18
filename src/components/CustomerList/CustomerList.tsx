import React from 'react';
import { Customer } from '../../types';
import { LANGUAGE } from '../../constants/language';
import './CustomerList.css';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: string | null;
  onSelectCustomer: (customerId: string) => void;
  onAddCustomer: () => void;
  maxCustomers?: number;
}

export const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomerId,
  onSelectCustomer,
  onAddCustomer,
  maxCustomers = 3
}) => {
  const canAddMore = customers.length < maxCustomers;

  return (
    <div className="customer-list">
      <div className="customer-list-title">{LANGUAGE.CUSTOMERS_TITLE}</div>
      <div className="customer-items-container">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className={`customer-item ${selectedCustomerId === customer.id ? 'active' : ''}`}
            onClick={() => onSelectCustomer(customer.id)}
          >
            <div className="customer-icon">{customer.icon}</div>
          </div>
        ))}
        
        {canAddMore && (
          <button className="add-customer-button" onClick={onAddCustomer}>
            <span className="add-icon">+</span>
          </button>
        )}
      </div>
    </div>
  );
};
