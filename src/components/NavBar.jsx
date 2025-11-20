

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

//   useEffect(() => {
//     document.querySelector("html").setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleTheme = (checked) => setTheme(checked ? "dark" : "light");
//   const handleLogout = () => signOutUser();

//   return (
//     <div className="navbar py-2 px-4 shadow-sm rounded-full glass-card max-w-7xl mx-auto bg:pink">

//       {/* Navbar Start */}
//       <div className="navbar-start flex items-center gap-2">

//         {/* Hamburger for small screens */}
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//               viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </label>

//           <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//             <li><NavLink to="/"><GoHomeFill /> Home</NavLink></li>
//             <li><NavLink to="/all-models">Available Foods</NavLink></li>
//             {user && (
//               <>
//                 <li><NavLink to="/add-food"><ImBoxAdd /> Add Food</NavLink></li>
//                 <li><NavLink to="/manage-my-foods">Manage My Foods</NavLink></li>
//                 <li><NavLink to="/my-food-requests">My Food Requests</NavLink></li>
//               </>
//             )}
//           </ul>
//         </div>

//         {/* Brand / Logo */}
//         <Link to="/" className="text-xl font-bold flex items-center gap-2">
//           <IoFastFood size={22} color="red" /> TasteTrail
//         </Link>
//       </div>

//       {/* Navbar Center (only for medium+ screens) */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-6">
//           <li><NavLink to="/"><GoHomeFill /> Home</NavLink></li>
//           <li><NavLink to="/all-models">Available Foods</NavLink></li>
//           {user && (
//             <>
//               <li><NavLink to="/add-food"><ImBoxAdd /> Add Food</NavLink></li>
//               <li><NavLink to="/manage-my-foods">Manage My Foods</NavLink></li>
//               <li><NavLink to="/my-food-requests">My Food Requests</NavLink></li>
//             </>
//           )}
//         </ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end gap-3">

//         {!user ? (
//           <Link
//             to="/auth/login"
//             className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500"
//           >
//             <IoLogIn /> Login
//           </Link>
//         ) : (
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 border-2 border-gray-300 rounded-full overflow-hidden">
//                 <img
//                   src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
//                   alt={user.displayName || "User"}
//                 />
//               </div>
//             </div>

//             <ul
//               tabIndex={-1}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-60 p-2 shadow-lg"
//             >
//               <li className="font-bold text-center">{user.displayName || "No Name"}</li>
//               <li className="text-xs text-center text-gray-500 mb-2">{user.email}</li>
//               <div className="border-b border-gray-200 mb-2"></div>

//               <li><NavLink to="/profile"><FaUser /> Profile</NavLink></li>
//               <li><NavLink to="/add-food">Add Food</NavLink></li>
//               <li><NavLink to="/manage-my-foods">Manage My Foods</NavLink></li>
//               <li><NavLink to="/my-food-requests">My Food Requests</NavLink></li>

//               <li className="flex items-center justify-between mt-2 mb-2 px-2">
//                 <span><FaGear /> Theme</span>
//                 <input
//                   type="checkbox"
//                   className="toggle toggle-sm"
//                   defaultChecked={theme === "dark"}
//                   onChange={(e) => handleTheme(e.target.checked)}
//                 />
//               </li>

//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-xs w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500"
//                 >
//                   <IoLogOut /> Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}

//       </div>
//     </div>
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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");
  const handleLogout = () => signOutUser();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Left: Logo + Hamburger */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-pink-600">
              <IoFastFood size={26} /> TasteTrail
            </Link>

            {/* Hamburger Menu for Mobile */}
            {user && (
              <div className="lg:hidden">
                <label htmlFor="mobile-menu" className="btn btn-ghost p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>
            )}
          </div>

          {/* Center: Menu Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavLink to="/" className="hover:text-pink-500 flex items-center gap-1"><GoHomeFill /> Home</NavLink>
            <NavLink to="/all-models" className="hover:text-pink-500">Available Foods</NavLink>
            {user && (
              <>
                <NavLink to="/add-food" className="hover:text-pink-500 flex items-center gap-1"><ImBoxAdd /> Add Food</NavLink>
                <NavLink to="/manage-my-foods" className="hover:text-pink-500">Manage My Foods</NavLink>
                <NavLink to="/my-food-requests" className="hover:text-pink-500">My Requests</NavLink>
              </>
            )}
          </div>

          {/* Right: User/Login */}
          <div className="flex items-center gap-3">
            {!user ? (
              <Link
                to="/auth/login"
                className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500"
              >
                <IoLogIn /> Login
              </Link>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 h-10 border-2 border-gray-300 rounded-full overflow-hidden">
                    <img
                      src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      alt={user.displayName || "User"}
                    />
                  </div>
                </label>

                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60 mt-2">
                  <li className="text-center font-bold">{user.displayName || "No Name"}</li>
                  <li className="text-center text-gray-500 text-sm mb-2">{user.email}</li>
                  <div className="border-b border-gray-200 mb-2"></div>

                  <li><NavLink to="/profile" className="hover:text-pink-500"><FaUser /> Profile</NavLink></li>
                  <li><NavLink to="/add-food" className="hover:text-pink-500">Add Food</NavLink></li>
                  <li><NavLink to="/manage-my-foods" className="hover:text-pink-500">Manage My Foods</NavLink></li>
                  <li><NavLink to="/my-food-requests" className="hover:text-pink-500">My Requests</NavLink></li>

                  <li className="flex items-center justify-between mt-2 mb-2 px-2">
                    <span><FaGear /> Theme</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-sm"
                      defaultChecked={theme === "dark"}
                      onChange={(e) => handleTheme(e.target.checked)}
                    />
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-red-500 hover:to-pink-500"
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
      <input type="checkbox" id="mobile-menu" className="hidden" />
      <div className="lg:hidden">
        <ul className="menu menu-compact p-4 bg-base-100 shadow-md">
          <li><NavLink to="/" className="hover:text-pink-500 flex items-center gap-1"><GoHomeFill /> Home</NavLink></li>
          <li><NavLink to="/all-models" className="hover:text-pink-500">Available Foods</NavLink></li>
          {user && (
            <>
              <li><NavLink to="/add-food" className="hover:text-pink-500 flex items-center gap-1"><ImBoxAdd /> Add Food</NavLink></li>
              <li><NavLink to="/manage-my-foods" className="hover:text-pink-500">Manage My Foods</NavLink></li>
              <li><NavLink to="/my-food-requests" className="hover:text-pink-500">My Requests</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
