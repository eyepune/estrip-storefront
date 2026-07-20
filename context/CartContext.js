'use client';
import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id && i.subscriptionMode === action.payload.subscriptionMode);
      if (existing) {
        return { ...state, items: state.items.map(i => i.id === action.payload.id && i.subscriptionMode === action.payload.subscriptionMode ? { ...i, qty: i.qty + 1 } : i) };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => !(i.id === action.payload.id && i.subscriptionMode === action.payload.subscriptionMode)) };
    case 'UPDATE_QTY': {
      if (action.payload.qty <= 0) {
        return { ...state, items: state.items.filter(i => !(i.id === action.payload.id && i.subscriptionMode === action.payload.subscriptionMode)) };
      }
      return { ...state, items: state.items.map(i => i.id === action.payload.id && i.subscriptionMode === action.payload.subscriptionMode ? { ...i, qty: action.payload.qty } : i) };
    }
    case 'UPDATE_FREQUENCY': {
      return { ...state, items: state.items.map(i => i.id === action.payload.id && i.subscriptionMode === action.payload.subscriptionMode ? { ...i, frequency: action.payload.frequency } : i) };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'HYDRATE':
      return action.payload;
    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('estrip-cart');
      if (saved) dispatch({ type: 'HYDRATE', payload: JSON.parse(saved) });
    } catch {}
    // Delay setting hydrated to avoid race condition with the first state update
    setTimeout(() => setHydrated(true), 10);
  }, []);

  useEffect(() => {
    if (hydrated) {
      try { localStorage.setItem('estrip-cart', JSON.stringify(state)); } catch {}
    }
  }, [state, hydrated]);

  const totalItems = state.items.reduce((n, i) => n + i.qty, 0);
  const subtotal = state.items.reduce((n, i) => {
    const price = i.subscriptionMode ? Math.round(i.price * (1 - (i.subscriptionDiscount || 15) / 100)) : i.price;
    return n + price * i.qty;
  }, 0);
  const FREE_SHIPPING_THRESHOLD = 599;
  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    setIsOpen(true);
  };
  const removeItem = (id, subscriptionMode = false) => dispatch({ type: 'REMOVE_ITEM', payload: { id, subscriptionMode } });
  const updateQty = (id, qty, subscriptionMode = false) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty, subscriptionMode } });
  const updateFrequency = (id, frequency, subscriptionMode = true) => dispatch({ type: 'UPDATE_FREQUENCY', payload: { id, frequency, subscriptionMode } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ items: state.items, totalItems, subtotal, shippingProgress, amountToFreeShipping, isOpen, setIsOpen, addItem, removeItem, updateQty, updateFrequency, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
