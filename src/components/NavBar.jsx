

import { Link, NavLink } from "react-router-dom";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { ImBoxAdd } from "react-icons/im";
import { FaUser, FaGear } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { IoFastFood } from "react-icons/io5";
const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");
  const handleLogout = () => signOutUser();

  return (
    <div className="navbar py-2 px-4 shadow-sm rounded-full glass-card max-w-7xl mx-auto bg:pink">

      {/* Navbar Start */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
         <IoFastFood size={22} color="red" /> TasteTrail
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li><NavLink to="/"><GoHomeFill /> Home</NavLink></li>
          <li><NavLink to="/all-models">Available Foods</NavLink></li>
          {user && (
            <>
              <li><NavLink to="/add-food"><ImBoxAdd /> Add Food</NavLink></li>
              <li><NavLink to="/manage-my-foods">Manage My Foods</NavLink></li>
              <li><NavLink to="/my-food-requests">My Food Requests</NavLink></li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-3">
        {!user ? (
          <Link
            to="/auth/login"
            className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500"
          >
            <IoLogIn /> Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border-2 border-gray-300 rounded-full overflow-hidden">
                <img
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  alt={user.displayName || "User"}
                />
              </div>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-60 p-2 shadow-lg"
            >
              {/* User Info */}
              <li className="font-bold text-center">{user.displayName || "No Name"}</li>
              <li className="text-xs text-center text-gray-500 mb-2">{user.email}</li>
              <div className="border-b border-gray-200 mb-2"></div>

              {/* Menu Links */}
              <li><NavLink to="/profile"><FaUser /> Profile</NavLink></li>
              <li><NavLink to="/add-food">Add Food</NavLink></li>
              <li><NavLink to="/manage-my-foods">Manage My Foods</NavLink></li>
              <li><NavLink to="/my-food-requests">My Food Requests</NavLink></li>

              {/* Theme Toggle */}
              <li className="flex items-center justify-between mt-2 mb-2 px-2">
                <span><FaGear /> Theme</span>
                <input
                  type="checkbox"
                  className="toggle toggle-sm"
                  defaultChecked={theme === "dark"}
                  onChange={(e) => handleTheme(e.target.checked)}
                />
              </li>

              {/* Logout Button */}
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-xs w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
