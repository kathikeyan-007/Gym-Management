import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch the user details when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(response.data.user);
      } catch (err) {
        setError('Failed to fetch user details');
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="bg-gray-800 min-h-screen p-10">
      <button
        onClick={() => navigate('/admin/users')}
        className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg mb-6"
      >
        Back to Users
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {user ? (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">User Details</h2>
          <p className="text-gray-300">Email: {user.email}</p>
          {/* Add more user details if needed */}
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
