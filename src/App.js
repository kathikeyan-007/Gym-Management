import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar';
import Intro from './components/intro';
import Home from './components/Home';
import About from './components/about';
import Gymfit from './components/gymfit';
import Homefit from './components/homefit';
import Cart from './components/Cart';
import Order from './components/order';
import AdminPanel from './components/AdminPanel';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { CartProvider } from './components/cartContext'; // Import CartProvider for managing cart state
import AOS from 'aos';
import 'aos/dist/aos.css'; // For animations
import './App.css';
import Users from './components/Users'; // Import Users page
import UserDetail from './components/UserDetail'; // Import UserDetail page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [isAdmin, setIsAdmin] = useState(false); // Admin check state

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: false,
    });

    // Check local storage for token and authentication status
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // Assuming the token or some other info in localStorage can tell us if the user is an admin
      const isAdmin = localStorage.getItem('isAdmin'); // Check for admin status in localStorage
      setIsAdmin(isAdmin === 'true'); // Admin status is stored as a string 'true' or 'false'
    }
  }, []);

  const handleAuthentication = (status, isAdmin = false) => {
    setIsAuthenticated(status);
    setIsAdmin(isAdmin); // Update admin state if needed
    localStorage.setItem('isAdmin', isAdmin); // Store admin status in localStorage
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/signin" element={<SignIn onAuthenticate={handleAuthentication} />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes for Authenticated Users */}
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Nav />}>
                <Route index element={<Intro />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="gymfit" element={<Gymfit />} />
                <Route path="homefit" element={<Homefit />} />
                <Route path="cart" element={<Cart />} />
                <Route path="order" element={<Order />} />
              </Route>

              {/* Admin Panel Route (Only accessible if the user is admin) */}
              {isAdmin && (
                <>
                  <Route path="adminpanel" element={<AdminPanel />} />
                  <Route path="admin/users" element={<Users />} /> {/* Users List */}
                  <Route path="admin/users/:id" element={<UserDetail />} /> {/* User Details */}
                </>
              )}
            </>
          ) : (
            <Route path="/" element={<SignIn onAuthenticate={handleAuthentication} />} />
          )}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
