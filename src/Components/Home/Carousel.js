import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [count, setCount] = useState(() => {
    // Initialize count based on items in cartItems when the component mounts
    const storedCart = localStorage.getItem('cartItems');
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    return parsedCart.reduce((total, item) => total + item.quantity, 0);
  });

  // Update count whenever cartItems changes
  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCount(totalItems);
  }, [cartItems]);

  const addToCart = (item) => {
    const itemExists = cartItems.find(cartItem => cartItem._id === item._id);
    if (itemExists) {
      toast.warn("Already in the cart!");
    } else {
      const newCart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(newCart);
      localStorage.setItem('cartItems', JSON.stringify(newCart));
      toast.success(`${item.name} added to the cart!`);
    }
  };

  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeFromCart = (itemToRemove) => {
    const newCart = cartItems.filter(item => item._id !== itemToRemove._id);
    setCartItems(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ count, cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}>
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};
