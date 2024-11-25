import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || '');

  const handleResetPassword = () => {
    // Redirect the user to Gmail
    window.location.href = 'https://mail.google.com/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Helmet>
            <title>LingoBingo | Reset Password</title>
        </Helmet>
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>
        <p className="text-gray-600 text-center">
          Enter your email to receive a password reset link.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleResetPassword();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Reset Password
          </button>
        </form>
        <button
          onClick={() => navigate('/login')}
          className="w-full px-4 py-2 mt-2 text-sm text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
