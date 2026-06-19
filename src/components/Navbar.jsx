import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom"
const Navbar = () => {
  const location = useLocation()
  const isCounselling = location.pathname === '/Counselling'
  const isRehabBooking = location.pathname === '/RehabBooking'
  const isGoals = location.pathname === '/Goals'
  const isReminders = location.pathname === '/Reminders'
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
            to="/Counselling"
            className={`{text-gray-600 hover:text-blue-600   ${isCounselling && "border-b-2 border-blue-600 text-blue-600 font-semibold pb-1" } `}
          >
           Counselling 
          </Link>

          <Link
            to="/RehabBooking"
            className={`{text-gray-600 hover:text-blue-600 transition-colors ${isRehabBooking && "border-b-2 border-blue-600 text-blue-600 font-semibold pb-1 " }`}
          >
             Rehab Centers
          </Link>

          <Link
            to="/Goals"
            className={`{text-gray-600 hover:text-blue-600 transition-colors ${isGoals && "border-b-2 border-blue-600 text-blue-600 font-semibold pb-1" }`}
          >
            Goals
          </Link>

          <Link
            to="/Reminders"
            className={`{text-gray-600 hover:text-blue-600 transition-colors ${isReminders && "border-b-2 border-blue-600 text-blue-600 font-semibold pb-1 " }`}
          >
            Reminders
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden md:block text-gray-600 text-blue-600 transition-colors hover:text-blue-600 hover:font-semibold"
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