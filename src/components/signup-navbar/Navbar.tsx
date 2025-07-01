import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-100">
      {/* Left: Logo Circle */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
      </div>
      {/* Right: Language and Login */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-700 text-sm">
          English (united States)
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
        <button className="border border-gray-400 rounded-lg px-4 py-1.5 text-gray-800 font-medium hover:bg-gray-100 transition">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar; 