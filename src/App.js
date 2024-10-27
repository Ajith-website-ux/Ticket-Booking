import './App.css';
import Demo from './Components/Home/TicketCard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductDetails from './Components/Home/ViewImage';
import { LoginUser } from './Components/Home/Login';
import { NavigationBar } from './Components/Home/NavigationBar';
import { CartProvider } from './Components/Home/Carousel'; // Changed to CartProvider
import CartList from './Components/Home/CartList'; // Changed import
import { useState } from 'react';
import { FooterArea } from './Components/Aboutus/footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication

  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication state to true on login
  };

  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/demo" /> : <LoginUser onLogin={handleLogin} />}
          />
          <Route path="/demo" element={<Demo />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Navigate to="/" />} /> 
          <Route path="/CartView/:id" element={<CartList />} />
          <Route path="/CartDetails" element={<CartList />} />
          <Route path='/about' element={<FooterArea />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
