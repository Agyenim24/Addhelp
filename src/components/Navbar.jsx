import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          AddHelp
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/dashbaord"
            className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
          >
           Dashboard
          </Link>

          <Link
            to="/counselling"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
             Counselling
          </Link>

          <Link
            to="/faciclities"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Facilities
          </Link>

          <Link
            to="/goals"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Goals
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden md:block text-gray-600 text-blue-600 transition-colors"
          >
            Login
          </Link>

          <Link
            to="/SignUp"
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;