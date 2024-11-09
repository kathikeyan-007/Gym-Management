import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Using Link for redirection
import axios from 'axios';
import { FaLock } from 'react-icons/fa'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignIn = ({ onAuthenticate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // State to track if user is admin

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for admin credentials
    if (email === 'admin@123' && password === 'admin') {
      setIsAdmin(true); // Set user as admin
      onAuthenticate(true, true); // Update parent state to indicate admin is logged in
      return; // Stop further execution if admin credentials are correct
    }

    // For regular user login (non-admin)
    try {
      const response = await axios.post('http://localhost:5000/api/signin', { email, password });

      if (response.status === 200) {
        onAuthenticate(true, false); // Regular user authentication
        localStorage.setItem('token', response.data.token);
        window.location.href = '/'; // Redirect to home page after regular sign-in
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Invalid credentials');
      } else {
        setError('Server error');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-10 bg-gray-800 bg-opacity-90 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white" data-aos="fade-up">
          <FaLock size={30} className="inline-block mr-2 text-red-500" />
          Welcome Back to Gym Management
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              data-aos="fade-up"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              data-aos="fade-up"
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
              data-aos="fade-up"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Admin Link (Only shown if the user is logged in as admin) */}
        {isAdmin && (
          <p className="text-center mt-4 text-gray-300" data-aos="fade-up" data-aos-delay="400">
            You are logged in as an admin.{' '}
            <Link to="/adminpanel" className="text-red-500 hover:underline">
              Go to Admin Panel
            </Link>
          </p>
        )}
        <p className="text-center mt-4 text-gray-300" data-aos="fade-up" data-aos-delay="400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
