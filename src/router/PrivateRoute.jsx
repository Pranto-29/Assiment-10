// import { use } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = use(AuthContext);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
//   }

//   return children;
// };

// export default PrivateRoute;

import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// Simple Spinner Component
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    // Loading spinner 
    return <Loader />;
  }

  if (!user) {
  
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
