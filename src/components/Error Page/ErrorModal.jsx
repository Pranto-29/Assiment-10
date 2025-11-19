// ErrorModal.jsx


const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-red-500 mb-4">Error!</h2>
        <p className="text-gray-700 mb-6">{message || "Something went wrong"}</p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorModal;

