import React from 'react';
import './quantityControl.css';

export const QuantityControl = ({ prod, updateQuantity }) => {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    updateQuantity(prod.id, prod.color, newQuantity);
  };

  return (
    <div className="select">
      <select value={prod.quantity} onChange={handleQuantityChange}>
        {[...Array(10).keys()].map((value) => (
          <option key={value} value={value + 1}>
            {value + 1}
          </option>
        ))}
      </select>
    </div>
  );
};


