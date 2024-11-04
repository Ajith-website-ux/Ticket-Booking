import './App.css';
import Demo from './Components/Home/TicketCard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductDetails from './Components/Home/ViewImage';
import { LoginUser } from './Components/Home/Login';
import { NavigationBar } from './Components/Home/NavigationBar';
import { CartProvider } from './Components/Home/Carousel'; 
import CartList from './Components/Home/CartList';
import { useState, useEffect } from 'react';
import { FooterArea } from './Components/Aboutus/footer';
import { AboutUs } from './Components/Aboutus/AboutUs';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <CartProvider>
      <Router>
        {isAuthenticated && <NavigationBar onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/demo" /> : <LoginUser onLogin={handleLogin} />} />
          <Route path="/demo" element={isAuthenticated ? <Demo /> : <Navigate to="/" />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Navigate to="/" />} /> 
          <Route path="/CartView/:id" element={<CartList />} />
          <Route path="/CartDetails" element={<CartList />} />
          <Route path='/about' element={<AboutUs />} />

        </Routes>
        {isAuthenticated && <FooterArea />}
      </Router>
      
    </CartProvider>
  );
}

export default App;
