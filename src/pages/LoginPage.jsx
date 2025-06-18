import React from 'react';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="flex w-[900px] max-w-full shadow-lg bg-white rounded-md overflow-hidden">
        
        {/* Left Side Image (Hidden on small screens) */}
        <div className="hidden md:flex w-1/2">
          <img
            src="/welcomeimg.jpg"
            alt="Welcome"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <div className="w-full max-w-sm">
            <h1 className="text-4xl font-bold text-center font-poppins mb-8">Intouch</h1>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                required
                placeholder="Phone number, username, or email"
                className="border border-gray-300 p-3 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id='username'
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="border border-gray-300 p-3 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id='password'
              />
              <button
                type="submit"
              
                className="bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
                onClick={(e) => {
                  e.preventDefault();
                  if (document.getElementById('password'). value === 'admin@123' && document.getElementById('username').value === 'admin') {
                    navigate('/user');
                  }
                }}
              >
                Log In
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </div>

            <div className="mt-6 border-t pt-4 text-center text-sm">
              Don’t have an account?{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
