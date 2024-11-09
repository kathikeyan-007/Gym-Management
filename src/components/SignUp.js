import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', { email, password });

      if (response.status === 201) {
        window.location.href = '/signin';
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Server error');
      } else {
        setError('Server error');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-10 bg-gray-800 bg-opacity-90 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white" data-aos="fade-up">
          <FaUserPlus size={30} className="inline-block mr-2 text-red-500" />
          Create Your Gym Management Account
        </h2>

        <p className="text-center text-lg text-gray-300 mb-4" data-aos="fade-up" data-aos-delay="200">
          Join the best gym management system. Fitness made easy!
        </p>

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
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
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
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-gray-300" data-aos="fade-up" data-aos-delay="400">
          Already have an account?{' '}
          <Link to="/signin" className="text-red-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
