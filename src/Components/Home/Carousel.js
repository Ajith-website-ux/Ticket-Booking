import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  const [count, setCount] = useState(cartItems.length); // Initialize count based on loaded items

  // Function to add items to the cart
  const addToCart = (item) => {
    const newCart = [...cartItems, item];
    setCartItems(newCart); // Update state
    setCount(newCart.length); // Update count
    localStorage.setItem('cartItems', JSON.stringify(newCart)); // Save to localStorage
  };

  // Function to remove items from the cart
  const removeFromCart = (itemToRemove) => {
    const newCart = cartItems.filter(item => item._id !== itemToRemove._id);
    setCartItems(newCart);
    setCount(newCart.length);
    localStorage.setItem('cartItems', JSON.stringify(newCart)); // Save to localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, count, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};






