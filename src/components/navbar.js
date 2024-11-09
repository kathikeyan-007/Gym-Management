import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/icon3.png';
import Footer from './footer';
import Chatbot from './Chatbot'; // Import your Chatbot component
import { FaSignOutAlt } from 'react-icons/fa'; // Import logout icon

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');  // State to store search query
  const navigate = useNavigate();  // Hook to navigate to other pages

  // Handle cart click (navigating to cart page)
  const handleCartClick = () => {
    navigate('/cart');
  };

  // Handle search click or Enter key press
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page with the query as a URL parameter
      navigate(`/search?q=${searchQuery}`);
    } else {
      alert("Please enter a search term!");
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Enter key press for search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle logout (clear token and navigate to sign-in page)
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/signin'); // Redirect to SignIn page
  };

  return (
    <>
      <div className="flex sticky justify-between items-center px-10 py-5 bg-black navbar-fixed-top">
        <div className="flex gap-5 items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-50 ml-5" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-10 mr-5">
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="home">Home</Link>
            </li>
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="gymfit">Gym Fit</Link>
            </li>
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="homefit">Home Fit</Link>
            </li>
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="about">About</Link>
            </li>
          </ul>

          {/* Enhanced Search Bar with Red Button */}
          <div className="flex items-center bg-gray-800 rounded-full ml-4 px-3 py-1 shadow-md">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}  // Trigger search on Enter key press
              placeholder="Search..."
              className={`bg-gray-900 text-white outline-none placeholder-gray-500 pl-4 pr-2 rounded-full w-40 transition duration-300 ease-in focus:w-60 focus:bg-gray-800 ${!searchQuery && 'border-2 border-red-600'}`}
            />
            <button
              onClick={handleSearch}
              className="bg-red-600 text-white ml-2 px-4 py-1 rounded-full hover:bg-red-700 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l3.86 3.85a1 1 0 01-1.42 1.42l-3.86-3.85zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Shopping Cart Trolley Icon Button */}
          <button
            onClick={handleCartClick}
            className="bg-red-600 text-white ml-5 px-4 py-1 rounded-full hover:bg-red-700 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4h13a1 1 0 01.92 1.39l-2.72 6.09a1 1 0 01-.92.61H9.41l-.81 2H19a1 1 0 110 2H8.03a1 1 0 01-.92-.61L3.53 6H2a1 1 0 110-2h2.31l1.38 3h13.14l2.1-4.7A1 1 0 0019.15 2H6.5L5.2 0H2a1 1 0 110-2h4a1 1 0 01.9.56L9 4zM7 17a1 1 0 100 2 1 1 0 000-2zm9 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </button>

          {/* Visually Appealing Logout Icon Button */}
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg flex items-center gap-2 ml-5"
          >
            <FaSignOutAlt className="inline-block" /> Logout
          </button>

        </div>
      </div>

      <div className="content-wrapper">
        <Outlet />
      </div>

      <Chatbot />
      <Footer />
    </>
  );
};

export default Nav;
