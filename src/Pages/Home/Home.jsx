

// import { useEffect, useState } from "react";
// import { ModelCard } from "../../components/ModelCard";
// import Banner from "../../components/Banner";

// const Home = () => {
//   const [models, setModels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://server-client-delta.vercel.app/models")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch models");
//         return res.json();
//       })
//       .then((resData) => {
//         const sorted = resData.data.sort((a, b) => (b.price_max || 0) - (a.price_max || 0));
//         setModels(sorted.slice(0, 6)); // শুধু top 6
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message || "Something went wrong");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Banner />

//       <div className="text-center text-2xl font-bold mt-10">All Food</div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-8">
//         {models.length > 0 ? (
//           models.map((model) => <ModelCard key={model._id} model={model} />)
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">No models available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import { ModelCard } from "../../components/ModelCard";
import Banner from "../../components/Banner";

const Home = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://server-client-delta.vercel.app/models")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch models");
        return res.json();
      })
      .then((resData) => {
        // Sort by price_max descending and take top 6
        const sorted = resData.data.sort((a, b) => (b.price_max || 0) - (a.price_max || 0));
        setModels(sorted.slice(0, 6));
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
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
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
    <div className="pb-10">
      {/* Banner */}
      <Banner />

      {/* Section Title */}
      <div className="text-center text-2xl sm:text-3xl font-bold mt-10 px-4 sm:px-0">
        Top Foods
      </div>
      <p className="text-center text-gray-500 mt-2 px-4 sm:px-0">
        Check out our most popular food items
      </p>

      {/* Models Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-6 md:px-8">
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
