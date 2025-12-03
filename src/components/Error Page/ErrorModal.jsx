

import { useEffect } from "react";

const ErrorModal = ({ message, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-6"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-4">
          Error!
        </h2>

        {/* Message */}
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          {message || "Something went wrong"}
        </p>

        {/* Action Button */}
        <a
          href="/"
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorModal;
