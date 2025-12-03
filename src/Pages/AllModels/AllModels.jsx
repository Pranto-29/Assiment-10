


import { useLoaderData } from "react-router-dom";
import ModelCard from "../../components/ModelCard";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LodingSpinner/LodingSpinner";

const AllModels = () => {
  const loaderData = useLoaderData();
  const initialModels = loaderData?.data || loaderData || [];
  const [models, setModels] = useState(initialModels);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  // Update models when loaderData changes
  useEffect(() => {
    setModels(initialModels);
  }, [loaderData]);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim().toLowerCase();

    if (!search_text) {
      setModels(initialModels);
      return;
    }

    setLoading(true);

    const filtered = initialModels.filter((model) =>
      model.title?.toLowerCase().includes(search_text)
    );

    setModels(filtered);
    setLoading(false);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">All Foods</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Explore food from various categories.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 w-full max-w-2xl mx-auto"
      >
        <input
          type="search"
          name="search"
          placeholder="Search foods..."
          className="w-full sm:flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-pink-500 transition-all"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Models Grid */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <LoadingSpinner height="h-64" />
        </div>
      ) : models.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {models.map((model) => (
            <ModelCard
              key={model._id}
              model={model}
              canDelete={user?.email === model.email}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-sm sm:text-base">
          No foods found.
        </p>
      )}
    </div>
  );
};

export default AllModels;
