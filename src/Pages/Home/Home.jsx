

import { useEffect, useState } from "react";
import { ModelCard } from "../../components/ModelCard";
import Banner from "../../components/Banner";

const Home = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/models")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch models");
        return res.json();
      })
      .then((resData) => {
    
        const sorted = resData.data.sort((a, b) => (b.price_max || 0) - (a.price_max || 0));
        setModels(sorted.slice(0, 6)); // শুধু top 6
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div>
      <Banner />

      <div className="text-center text-2xl font-bold mt-10">All Food</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-8">
        {models.length > 0 ? (
          models.map((model) => <ModelCard key={model._id} model={model} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No models available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
