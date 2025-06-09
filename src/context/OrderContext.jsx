// src/context/OrderContext.jsx
import React, { createContext, useContext, useState } from 'react';

// 1. Create the context object
const OrderCtx = createContext(null);

// 2. Provider component
export function OrderProvider({ children }) {
  // order will be an object: { [itemId]: quantity }
  const [order, setOrder] = useState({});

  const addItem = (id) => {
    setOrder(o => ({ ...o, [id]: (o[id] || 0) + 1 }));
  };

  const removeItem = (id) => {
    setOrder(o => {
      const next = { ...o };
      if (!next[id]) return next;
      next[id]--;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  };

  const clearOrder = () => setOrder({});

  return (
    <OrderCtx.Provider value={{ order, addItem, removeItem, clearOrder }}>
      {children}
    </OrderCtx.Provider>
  );
}

// 3. Custom hook for consuming
export function useOrderContext() {
  const ctx = useContext(OrderCtx);
  if (ctx === null) {
    throw new Error('useOrderContext must be used inside an OrderProvider');
  }
  return ctx;
}