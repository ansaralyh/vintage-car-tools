import React from 'react';
import Navbar from './signup-navbar/Navbar';

const SignUp: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row w-full" style={{ height: 950 }}>
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-white px-8 py-12 h-full">
          <div className="w-full max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7A2D23] mb-4 leading-tight text-left">
              Explore the world<br />to experience the<br />beauty of nature
            </h1>
            <p className="text-gray-500 mb-8 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus
            </p>
            <div className="space-y-4 mb-6">
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 px-4 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 px-4 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
                <img src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                Continue with Facebook
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 px-4 text-gray-700 font-medium bg-white hover:bg-gray-50 transition">
                <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="Apple" className="w-5 h-5 mr-2" />
                Continue with Apple
              </button>
            </div>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-400">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button className="w-full bg-[#7A2D23] text-white rounded-full py-3 px-4 font-semibold hover:bg-[#5a211a] transition mb-4">
              Sign up with email
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              By signing up, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>, including <a href="#" className="underline">cookie use</a>.
            </p>
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

export default SignUp; 