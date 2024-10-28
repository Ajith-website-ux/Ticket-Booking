import React, { createContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [count, setCount] = useState(cartItems.length);

  const addToCart = (item) => {
    const itemExists = cartItems.some(cartItem => cartItem._id === item._id);
    if (itemExists) {
      toast.warn("Already in the cart!");
    } else {
      const newCart = [...cartItems, item];
      setCartItems(newCart);
      setCount(newCart.length);
      localStorage.setItem('cartItems', JSON.stringify(newCart));
      toast.success(`${item.name} added to the cart!`);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const newCart = cartItems.filter(item => item._id !== itemToRemove._id);
    setCartItems(newCart);
    setCount(newCart.length);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };

  const logout = () => {
    localStorage.removeItem('cartItems'); // Clear cart items
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
    setCartItems([]); // Reset cart items in state
    setCount(0); // Reset count
    toast.info("Logged out successfully!"); // Optional toast notification
  };

  return (
    <CartContext.Provider value={{ cartItems, count, addToCart, removeFromCart, logout }}>
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};
