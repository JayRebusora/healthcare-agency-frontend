import React from 'react';
import Login from './Login';

const AuthPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 py-6">
      <div className="mx-auto w-full max-w-4xl flex space-x-8">
        {/* Login Form (Left Side) */}
        <div className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-700 text-xl font-bold mb-4">Login</h2>
          <Login /> {/* Your existing Login component */}
        </div>

        {/* Sign Up Form (Right Side) */}
        <div className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-700 text-xl font-bold mb-4">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Your Full Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirm Password" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">Role</label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role">
                <option>Super Admin</option>
                <option>Healthcare Admin/Staff</option>
                <option>Personnel</option>
              </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;