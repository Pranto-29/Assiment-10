import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4 text-center">
      <div className="text-9xl mb-6 animate-bounce">🌸</div>
      <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
