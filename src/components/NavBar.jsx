

// import { Link, NavLink } from "react-router-dom";
// import { IoLogIn, IoLogOut, IoFastFood } from "react-icons/io5";
// import { GoHomeFill } from "react-icons/go";
// import { ImBoxAdd } from "react-icons/im";
// import { FaUser, FaGear } from "react-icons/fa6";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// const NavBar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => setTheme(checked ? "dark" : "light");
//   const handleLogout = () => signOutUser();

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">

//           {/* Logo & Hamburger */}
//           <div className="flex items-center gap-4">
//             <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-pink-600 hover:text-red-500 transition-colors">
//               <IoFastFood size={26} /> TasteTrail
//             </Link>

//             <button
//               className="lg:hidden btn btn-ghost p-2 text-gray-600 hover:text-pink-500 transition-colors"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
//                 viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-6">
//             <NavLink to="/" className="hover:text-pink-500 flex items-center gap-1 transition-colors"><GoHomeFill /> Home</NavLink>
//             <NavLink to="/all-models" className="hover:text-pink-500 transition-colors">Available Foods</NavLink>
//             {user && (
//               <>
//                 <NavLink to="/add-food" className="hover:text-pink-500 flex items-center gap-1 transition-colors"><ImBoxAdd /> Add Food</NavLink>
//                 <NavLink to="/manage-my-foods" className="hover:text-pink-500 transition-colors">Manage My Foods</NavLink>
//                 <NavLink to="/my-food-requests" className="hover:text-pink-500 transition-colors">My Requests</NavLink>
//               </>
//             )}
//           </div>

//           {/* User/Login */}
//           <div className="flex items-center gap-3">
//             {!user ? (
//               <Link
//                 to="/auth/login"
//                 className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all"
//               >
//                 <IoLogIn /> Login
//               </Link>
//             ) : (
//               <div className="dropdown dropdown-end hidden lg:block">
//                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:ring-2 ring-pink-500 transition-all">
//                   <div className="w-10 h-10 border-2 border-gray-300 rounded-full overflow-hidden">
//                     <img
//                       src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
//                       alt={user.displayName || "User"}
//                     />
//                   </div>
//                 </label>

//                 <ul tabIndex={0} className="dropdown-content menu p-3 shadow-lg bg-base-100 rounded-lg w-60 mt-2 space-y-2">
//                   <li className="text-center font-bold">{user.displayName || "No Name"}</li>
//                   <li className="text-center text-gray-500 text-sm">{user.email}</li>
//                   <div className="border-b border-gray-200"></div>

//                   <li><NavLink to="/profile" className="hover:text-pink-500 transition-colors"><FaUser /> Profile</NavLink></li>
//                   <li><NavLink to="/add-food" className="hover:text-pink-500 transition-colors">Add Food</NavLink></li>
//                   <li><NavLink to="/manage-my-foods" className="hover:text-pink-500 transition-colors">Manage My Foods</NavLink></li>
//                   <li><NavLink to="/my-food-requests" className="hover:text-pink-500 transition-colors">My Requests</NavLink></li>

//                   <li className="flex items-center justify-between mt-2 px-2">
//                     <span><FaGear /> Theme</span>
//                     <input type="checkbox" className="toggle toggle-sm" checked={theme === "dark"} onChange={(e) => handleTheme(e.target.checked)} />
//                   </li>

//                   <li>
//                     <button
//                       onClick={handleLogout}
//                       className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all"
//                     >
//                       <IoLogOut /> Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden px-4 pb-4 bg-base-100 shadow-lg rounded-b-xl transition-all duration-300">
//           <ul className="menu menu-compact space-y-3">
//             <li>
//               <NavLink to="/" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors">
//                 <GoHomeFill /> Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/all-models" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors">
//                 Available Foods
//               </NavLink>
//             </li>

//             {user ? (
//               <>
//                 <li>
//                   <NavLink to="/profile" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors">
//                     <FaUser /> Profile
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/add-food" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors">
//                     <ImBoxAdd /> Add Food
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/manage-my-foods" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors">
//                     Manage My Foods
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/my-food-requests" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors">
//                     My Requests
//                   </NavLink>
//                 </li>

//                 <li className="flex items-center justify-between px-3 py-2">
//                   <span>Theme</span>
//                   <input type="checkbox" className="toggle toggle-sm" checked={theme === "dark"} onChange={(e) => handleTheme(e.target.checked)} />
//                 </li>

//                 <li>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all"
//                   >
//                     <IoLogOut /> Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <Link
//                   to="/auth/login"
//                   className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2"
//                 >
//                   <IoLogIn /> Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

import { Link, NavLink } from "react-router-dom";
import { IoLogIn, IoLogOut, IoFastFood } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { ImBoxAdd } from "react-icons/im";
import { FaUser, FaGear } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");
  const handleLogout = () => signOutUser();

  const activeLink =
    "text-pink-500 font-semibold transition-colors duration-200";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-pink-600 hover:text-red-500 transition-colors"
            >
              <IoFastFood size={26} /> TasteTrail
            </Link>

            {/* Hamburger for Mobile */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLink : "hover:text-pink-500 transition-colors"
              }
            >
              <GoHomeFill className="inline mb-1" /> Home
            </NavLink>
            <NavLink
              to="/all-models"
              className={({ isActive }) =>
                isActive ? activeLink : "hover:text-pink-500 transition-colors"
              }
            >
              Available Foods
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/add-food"
                  className={({ isActive }) =>
                    isActive
                      ? activeLink
                      : "flex items-center gap-1 hover:text-pink-500 transition-colors"
                  }
                >
                  <ImBoxAdd /> Add Food
                </NavLink>
                <NavLink
                  to="/manage-my-foods"
                  className={({ isActive }) =>
                    isActive ? activeLink : "hover:text-pink-500 transition-colors"
                  }
                >
                  Manage My Foods
                </NavLink>
                <NavLink
                  to="/my-food-requests"
                  className={({ isActive }) =>
                    isActive ? activeLink : "hover:text-pink-500 transition-colors"
                  }
                >
                  My Requests
                </NavLink>
              </>
            )}
          </div>

          {/* User/Login */}
          <div className="flex items-center gap-3">
            {!user ? (
              <Link
                to="/auth/login"
                className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all flex items-center gap-1"
              >
                <IoLogIn /> Login
              </Link>
            ) : (
              <div className="dropdown dropdown-end hidden lg:block">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar hover:ring-2 ring-pink-500 transition-all"
                >
                  <div className="w-10 h-10 border-2 border-gray-300 rounded-full overflow-hidden">
                    <img
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      alt={user.displayName || "User"}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-3 shadow-lg bg-base-100 rounded-lg w-60 mt-2 space-y-2"
                >
                  <li className="text-center font-bold">
                    {user.displayName || "No Name"}
                  </li>
                  <li className="text-center text-gray-500 text-sm">{user.email}</li>
                  <div className="border-b border-gray-200"></div>
                  <li>
                    <NavLink
                      to="/profile"
                      className="hover:text-pink-500 transition-colors flex items-center gap-1"
                    >
                      <FaUser /> Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/add-food"
                      className="hover:text-pink-500 transition-colors"
                    >
                      Add Food
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manage-my-foods"
                      className="hover:text-pink-500 transition-colors"
                    >
                      Manage My Foods
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my-food-requests"
                      className="hover:text-pink-500 transition-colors"
                    >
                      My Requests
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-between mt-2 px-2">
                    <span>
                      <FaGear /> Theme
                    </span>
                    <input
                      type="checkbox"
                      className="toggle toggle-sm"
                      checked={theme === "dark"}
                      onChange={(e) => handleTheme(e.target.checked)}
                    />
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all flex items-center justify-center gap-1"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white dark:bg-gray-900 shadow-lg rounded-b-xl mt-2 transition-all duration-300">
          <ul className="menu menu-compact space-y-2">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
              >
                <GoHomeFill /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-models"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
              >
                Available Foods
              </NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    <FaUser /> Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-food"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    <ImBoxAdd /> Add Food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manage-my-foods"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    Manage My Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-food-requests"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    My Requests
                  </NavLink>
                </li>

                <li className="flex items-center justify-between px-3 py-2">
                  <span>Theme</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-sm"
                    checked={theme === "dark"}
                    onChange={(e) => handleTheme(e.target.checked)}
                  />
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all flex items-center justify-center gap-1"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/auth/login"
                  className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2"
                >
                  <IoLogIn /> Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
