import React, { useState } from 'react';
import './CheckoutCounter.css';

interface CheckoutCounterProps {
  correctTotal: number;
  onCheckout: (success: boolean) => void;
}

export const CheckoutCounter: React.FC<CheckoutCounterProps> = ({
  correctTotal,
  onCheckout
}) => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');

  const handleNumberClick = (num: string) => {
    setInput((prev) => prev + num);
    setFeedback('none');
  };

  const handleClear = () => {
    setInput('');
    setFeedback('none');
  };

  const handleCheck = () => {
    const enteredAmount = parseInt(input, 10);
    if (isNaN(enteredAmount)) {
      setFeedback('error');
      onCheckout(false); // Trigger error sound
      return;
    }

    if (enteredAmount === correctTotal) {
      setFeedback('success');
      setTimeout(() => {
        onCheckout(true);
        setInput('');
        setFeedback('none');
      }, 1000);
    } else {
      setFeedback('error');
      onCheckout(false); // Trigger error sound
      setTimeout(() => {
        setFeedback('none');
      }, 1500);
    }
  };

  return (
    <div className="checkout-counter">
      <div className="counter-title">Checkout</div>
      
      <div className={`display ${feedback}`}>
        {input || '0'} Kč
      </div>

      {feedback === 'success' && (
        <div className="feedback success">✓ Correct!</div>
      )}
      {feedback === 'error' && (
        <div className="feedback error">✗ Try Again</div>
      )}

      <div className="number-pad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            className="number-button"
            onClick={() => handleNumberClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button className="number-button" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button className="action-button clear" onClick={handleClear}>
          CLR
        </button>
        <button className="action-button check" onClick={handleCheck}>
          ✓
        </button>
      </div>
    </div>
  );
};
