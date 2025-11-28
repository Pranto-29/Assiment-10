



// import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
// import { LuRotate3D } from 'react-icons/lu';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-r from-pink-500 to-red-700 py-10 px-6 md:px-12 rounded-t-3xl mt-20 text-gray-800 dark:text-gray-200">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

//         {/* Brand & Links */}
//         <div>
//           <div className="flex items-center space-x-2 text-white">
//             <LuRotate3D size={28} />
//             <span className="text-2xl font-bold">TasteTrail</span>
//           </div>
//           <ul className="space-y-2 mt-4">
//             <li><Link to="/all-models" className="hover:text-white transition">Home</Link></li>
//             <li><Link to="/add-food" className="hover:text-white transition">Available Food</Link></li>
//             <li><Link to="/profile" className="hover:text-white transition">Add Food</Link></li>
//             <li><Link to="/auth/login" className="hover:text-white transition">Login</Link></li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Resources</h3>
//           <ul className="space-y-2">
//             <li><Link to="/" className="hover:text-white transition">Learning Blog</Link></li>
//             <li><Link to="/" className="hover:text-white transition">Guides</Link></li>
//             <li><Link to="/" className="hover:text-white transition">Poly Tips</Link></li>
//             <li><Link to="/resources" className="hover:text-white transition">Resources</Link></li>
//           </ul>
//         </div>

//         {/* Community */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Community</h3>
//           <ul className="space-y-2">
//             <li><Link to="/" className="hover:text-white transition">Discussion Forums</Link></li>
//             <li><Link to="/" className="hover:text-white transition">Study Groups</Link></li>
//             <li><Link to="/" className="hover:text-white transition">Events & Workshops</Link></li>
//             <li><Link to="/" className="hover:text-white transition">Leaderboard</Link></li>
//           </ul>
//         </div>

//         {/* Social Connect */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
//           <div className="flex space-x-4 mb-4">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
//               <Facebook size={24} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
//               <Twitter size={24} />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
//               <Instagram size={24} />
//             </a>
//           </div>
//           <div>
//             <a href="mailto:23pranto729@gmail.com" className="flex items-center hover:text-white transition">
//               <Mail size={18} className="mr-2" /> 23pranto729@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="border-t border-white/20 mt-10 pt-6 text-center">
//         <p className="text-sm">
//           © {currentYear} TasteTrail Project. All Rights Reserved.
//           <span className="ml-4">
//             <Link to="/" className="hover:text-white mr-3 transition">Privacy Policy</Link>
//             <Link to="/" className="hover:text-white transition">Terms of Service</Link>
//           </span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { LuRotate3D } from 'react-icons/lu';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-red-700 py-12 px-4 sm:px-8 md:px-16 rounded-t-3xl mt-20 text-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

        {/* Brand & Links */}
        <div>
          <div className="flex items-center space-x-2 text-white">
            <LuRotate3D size={28} />
            <span className="text-2xl sm:text-3xl font-bold">TasteTrail</span>
          </div>
          <ul className="mt-5 space-y-2 text-sm sm:text-base">
            <li><Link to="/all-models" className="hover:text-gray-200 transition">Home</Link></li>
            <li><Link to="/add-food" className="hover:text-gray-200 transition">Available Food</Link></li>
            <li><Link to="/profile" className="hover:text-gray-200 transition">Add Food</Link></li>
            <li><Link to="/auth/login" className="hover:text-gray-200 transition">Login</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link to="/" className="hover:text-gray-200 transition">Learning Blog</Link></li>
            <li><Link to="/" className="hover:text-gray-200 transition">Guides</Link></li>
            <li><Link to="/" className="hover:text-gray-200 transition">Poly Tips</Link></li>
            <li><Link to="/resources" className="hover:text-gray-200 transition">Resources</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link to="/" className="hover:text-gray-200 transition">Discussion Forums</Link></li>
            <li><Link to="/" className="hover:text-gray-200 transition">Study Groups</Link></li>
            <li><Link to="/" className="hover:text-gray-200 transition">Events & Workshops</Link></li>
            <li><Link to="/" className="hover:text-gray-200 transition">Leaderboard</Link></li>
          </ul>
        </div>

        {/* Social Connect */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
              <Instagram size={24} />
            </a>
          </div>
          <div>
            <a href="mailto:23pranto729@gmail.com" className="flex items-center hover:text-gray-200 transition text-sm sm:text-base">
              <Mail size={18} className="mr-2" /> 23pranto729@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm sm:text-base">
        <p>
          © {currentYear} TasteTrail Project. All Rights Reserved.
          <span className="block sm:inline ml-0 sm:ml-4 mt-2 sm:mt-0">
            <Link to="/" className="hover:text-gray-200 mr-3 transition">Privacy Policy</Link>
            <Link to="/" className="hover:text-gray-200 transition">Terms of Service</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
