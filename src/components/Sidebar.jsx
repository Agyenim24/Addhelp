import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCalendar,
  FiTarget,
  FiBell,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiHome size={20} />,
    },
    {
      name: "Counselling",
      path: "/counselling",
      icon: <FiUsers size={20} />,
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: <FiCalendar size={20} />,
    },
    {
      name: "Goals",
      path: "/goals",
      icon: <FiTarget size={20} />,
    },
    {
      name: "Reminders",
      path: "/reminders",
      icon: <FiBell size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <aside className="h-screen w-72 bg-white border-r border-gray-200 fixed left-0 top-0 shadow-sm">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">
          AddHelp
        </h1>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all">
          <FiLogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;