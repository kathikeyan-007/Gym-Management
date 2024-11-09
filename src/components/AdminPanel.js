import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa'; // Import additional icons

const AdminPanel = () => {
  const handleLogout = () => {
    // Clear token from localStorage and any other authentication-related data
    localStorage.removeItem('token');
    window.location.href = '/signin'; // Redirect to sign-in page after logout
  };

  return (
    <div className="bg-gray-800 min-h-screen p-10">
      <h1 className="text-4xl font-semibold text-white mb-6">Admin Dashboard</h1>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg mb-6"
      >
        <FaSignOutAlt className="inline-block mr-2" /> Logout
      </button>

      <div className="grid grid-cols-3 gap-6">
        {/* Manage Users Section */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Manage Users</h2>
          <FaUsers size={40} className="text-red-500 mb-4" />
          <p className="text-gray-300 mb-4">View and manage gym members.</p>
          <Link
            to="/admin/users"
            className="text-red-500 hover:underline block"
          >
            Go to Users
          </Link>
        </div>

        {/* Gym Analytics Section */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Gym Analytics</h2>
          <FaChartBar size={40} className="text-green-500 mb-4" />
          <p className="text-gray-300 mb-4">View gym statistics and performance metrics.</p>
          <Link
            to="/admin/analytics"
            className="text-green-500 hover:underline block"
          >
            View Analytics
          </Link>
        </div>

        {/* Settings Section */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Settings</h2>
          <FaCog size={40} className="text-blue-500 mb-4" />
          <p className="text-gray-300 mb-4">Configure your gym management settings.</p>
          <Link
            to="/admin/settings"
            className="text-blue-500 hover:underline block"
          >
            Go to Settings
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Manage Payments */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Manage Payments</h2>
          <FaMoneyBillWave size={40} className="text-yellow-500 mb-4" />
          <p className="text-gray-300 mb-4">View and manage gym membership payments.</p>
          <Link
            to="/admin/payments"
            className="text-yellow-500 hover:underline block"
          >
            View Payments
          </Link>
        </div>

        {/* Manage Reports */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Manage Reports</h2>
          <FaClipboardList size={40} className="text-purple-500 mb-4" />
          <p className="text-gray-300 mb-4">Generate and view gym usage reports.</p>
          <Link
            to="/admin/reports"
            className="text-purple-500 hover:underline block"
          >
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
