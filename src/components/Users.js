import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch all users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data.users);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    // Navigate to the user details page
    navigate(`/admin/users/${userId}`);
  };

  return (
    <div className="bg-gray-800 min-h-screen p-10">
      <h1 className="text-4xl font-semibold text-white mb-6">Registered Users</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleUserClick(user._id)}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">{user.email}</h2>
            <p className="text-gray-300 mb-4">Click to view details</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
