import React from "react";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">ChatHive</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Choose a username"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-gray-700 font-medium">
              Contact No.
            </label>
            <input
              type="tel"
              id="contact"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your contact number"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-gray-700 font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your city"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
