import { useState, useCallback } from 'react';
import { Customer, Product } from '../types';
import { products as allProducts } from '../data/products';

export const useGameState = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  const selectedCustomer = customers.find((c) => c.id === selectedCustomerId);

  const addCustomer = useCallback(
    (icon: string, name: string) => {
      const newCustomer: Customer = {
        id: `c${Date.now()}`,
        icon,
        name,
        order: []
      };
      
      setCustomers((prev) => [...prev, newCustomer]);
      
      // Auto-select the first customer if none selected
      if (selectedCustomerId === null) {
        setSelectedCustomerId(newCustomer.id);
      }
    },
    [selectedCustomerId]
  );

  const addProductToOrder = useCallback(
    (product: Product) => {
      if (!selectedCustomerId) return;

      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === selectedCustomerId
            ? { ...customer, order: [...customer.order, product] }
            : customer
        )
      );
    },
    [selectedCustomerId]
  );

  const removeProductFromOrder = useCallback(
    (index: number) => {
      if (!selectedCustomerId) return;

      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === selectedCustomerId
            ? {
                ...customer,
                order: customer.order.filter((_, i) => i !== index)
              }
            : customer
        )
      );
    },
    [selectedCustomerId]
  );

  const checkout = useCallback(() => {
    if (!selectedCustomerId) return;

    // Remove the customer from the list
    setCustomers((prev) => prev.filter((c) => c.id !== selectedCustomerId));

    // Select the next customer or none if no customers left
    const remainingCustomers = customers.filter((c) => c.id !== selectedCustomerId);
    setSelectedCustomerId(remainingCustomers[0]?.id || null);
  }, [selectedCustomerId, customers]);

  return {
    customers,
    products: allProducts,
    selectedCustomerId,
    selectedCustomer,
    setSelectedCustomerId,
    addCustomer,
    addProductToOrder,
    removeProductFromOrder,
    checkout
  };
};
