import logo from "/images/logo.png";

function HomeNavbar() {
  return (
    <div className="">
      <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-200">
        {/* Left side - Logo/Brand */}
        <div className="text-2xl font-bold text-gray-800">
          <img src={logo} alt="z" />
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-[#B56576] font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#B56576] font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#B56576] font-medium"
          >
            Tours
          </a>
          <a
            href="#"
            className="text-[#B56576]  font-medium"
          >
            Bookings
          </a>
          <a
            href="#"
            className="text-[#B56576]  font-medium"
          >
            Contact
          </a>
        </div>

        {/* Right side - Signup/CTA */}
        <div>
          <button className="bg-[#621B1F] hover:bg-[#621B1F] text-white px-4 py-2 rounded-md font-medium">
            Signup
          </button>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
