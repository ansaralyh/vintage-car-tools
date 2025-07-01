import React, { useState } from 'react';
import Navbar from './signup-navbar/Navbar';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row w-full" style={{ height: 950 }}>
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-white px-8 py-12 h-full">
          <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#3d2321] mb-2 text-center">Log In</h2>
            <p className="text-gray-400 text-center mb-6 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</p>
            <form className="w-full space-y-4 mb-4">
              <div>
                <label className="block text-gray-500 text-sm mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-1" htmlFor="password">Password</label>
                <div className="relative">
                  <input id="password" type={showPassword ? 'text' : 'password'} className="w-full border border-gray-300 rounded-md px-3 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-[#7A2D23]" />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm flex items-center" onClick={() => setShowPassword(v => !v)}>
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-2 mb-2">
                <input id="terms" type="checkbox" className="mr-2" />
                <label htmlFor="terms" className="text-xs text-gray-700">By creating an account, I agree to our <a href="#" className="underline text-[#7A2D23]">Terms of use</a> and <a href="#" className="underline text-[#7A2D23]">Privacy Policy</a></label>
              </div>
              <button type="submit" className="w-full bg-[#7A2D23] text-white rounded-full py-3 px-4 font-semibold hover:bg-[#5a211a] transition mb-2">Log in</button>
            </form>
            <div className="flex items-center w-full mb-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-400">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 px-4 text-gray-700 font-medium bg-white hover:bg-gray-50 transition mb-3">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 px-4 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="Apple" className="w-5 h-5 mr-2" />
              Continue with Apple
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 h-full">
          <img
            src="/images/dino-reichmuth-A5rCN8626Ck-unsplash 1.png"
            alt="Nature road trip"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn; 