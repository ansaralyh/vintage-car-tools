import { Link, useLocation } from "react-router-dom";
import logo from "/images/logo.png";

function HomeNavbar() {
  const location = useLocation();

  const navLinkClass = (path: string) =>
    `text-[#B56576] font-medium ${
      location.pathname === path ? "font-extrabold text-[18px]" : ""
    }`;

  return (
    <div>
      <nav className="flex items-center justify-between  px-12 py-4 bg-white border-b border-gray-200">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Center - Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/home" className={navLinkClass("/home")}>
            Home
          </Link>
          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link to="/tours" className={navLinkClass("/tours")}>
            Tours
          </Link>
          <Link to="/bookings" className={navLinkClass("/bookings")}>
            Bookings
          </Link>
          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Right - Signup */}
        <div>
          <Link to="/signup">
            <button className="bg-[#621B1F] hover:bg-[#621B1F] text-white px-4 py-2 rounded-md font-medium">
              Signup
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
