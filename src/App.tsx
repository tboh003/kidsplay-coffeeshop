import { useState } from 'react';
import { CustomerList } from './components/CustomerList';
import { CustomerSelector } from './components/CustomerSelector';
import { ProductGrid } from './components/ProductGrid';
import { OrderPanel } from './components/OrderPanel';
import { CheckoutCounter } from './components/CheckoutCounter';
import { useGameState } from './hooks/useGameState';
import { useAudio } from './hooks/useAudio';
import { Product } from './types';
import './App.css';

function App() {
  const {
    customers,
    products,
    selectedCustomerId,
    selectedCustomer,
    setSelectedCustomerId,
    addCustomer,
    addProductToOrder,
    removeProductFromOrder,
    checkout
  } = useGameState();

  const { playSound } = useAudio();
  const [showCustomerSelector, setShowCustomerSelector] = useState(false);

  const handleCustomerSelect = (customerId: string) => {
    setSelectedCustomerId(customerId);
    playSound('add'); // Play sound when switching customers
  };

  const handleAddCustomerClick = () => {
    setShowCustomerSelector(true);
  };

  const handleSelectCustomerIcon = (icon: string, name: string) => {
    addCustomer(icon, name);
    playSound('add');
  };

  const handleProductClick = (product: Product) => {
    addProductToOrder(product);
    playSound('add');
  };

  const handleRemoveProduct = (index: number) => {
    removeProductFromOrder(index);
    playSound('remove');
  };

  const handleCheckout = (success: boolean) => {
    if (success) {
      playSound('success');
      checkout();
    } else {
      playSound('error');
    }
  };

  const currentOrder = selectedCustomer?.order || [];
  const orderTotal = currentOrder.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="app">
      <div className="game-layout">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={handleCustomerSelect}
          onAddCustomer={handleAddCustomerClick}
        />
        
        <ProductGrid
          products={products}
          onProductClick={handleProductClick}
        />
        
        <div className="right-panel">
          <OrderPanel
            order={currentOrder}
            onRemoveProduct={handleRemoveProduct}
          />
          
          <CheckoutCounter
            correctTotal={orderTotal}
            onCheckout={handleCheckout}
          />
        </div>
      </div>

      {showCustomerSelector && (
        <CustomerSelector
          onSelectIcon={handleSelectCustomerIcon}
          onClose={() => setShowCustomerSelector(false)}
        />
      )}
    </div>
  );
}

export default App;
