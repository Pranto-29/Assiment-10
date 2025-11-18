
// // // import { useLoaderData } from "react-router-dom";
// // // import { ModelCard } from "../../components/ModelCard";
// // // import { useState, useEffect, useContext } from "react";
// // // import { AuthContext } from "../../context/AuthContext";
// // // import LoadingSpinner from "../../components/LodingSpinner/LodingSpinner";

// // // const AllModels = () => {
// // //   const data = useLoaderData()
// // //   console.log(data)
// // //   const loaderData = useLoaderData();
// // //   const initialModels = loaderData?.data || loaderData || [];
// // //   const [models, setModels] = useState(initialModels);
// // //   const [loading, setLoading] = useState(false);
// // //   const { user } = useContext(AuthContext);

// // //   useEffect(() => {
// // //     setModels(initialModels);
// // //   }, [loaderData]);

// // //   const handleSearch = async (e) => {
// // //     e.preventDefault();
// // //     const search_text = e.target.search.value.trim();
// // //     if (!search_text) return;

// // //     setLoading(true);
// // //     try {
// // //       const res = await fetch(`http://localhost:4000/search?search=${search_text}`);
// // //       const json = await res.json();
// // //       setModels(json.data || []);
// // //     } catch (err) {
// // //       console.error("Search Error:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };
// // // if (loading) return <LoadingSpinner height="h-64" />; // <-- spinner here

 
// // //   const filteredModels = models.filter(model => model.email !== "unknown"); 
 
// // //   return (
// // //     <div className="px-4 md:px-8 lg:px-16 py-8">
// // //       {/* Header */}
// // //       <div className="text-center mb-6">
// // //         <h1 className="text-3xl font-bold">All Foods</h1>
// // //         <p className="text-gray-500 mt-2">Explore food from various categories.</p>
// // //       </div>
      

// // //       {/* Search Bar */}
// // //       <form
// // //         onSubmit={handleSearch}
// // //         className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
// // //       >
// // //         <input
// // //           type="search"
// // //           name="search"
// // //           placeholder="Search models..."
// // //           className="w-full sm:w-80 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
// // //         />
// // //         <button
// // //           type="submit"
// // //           className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-pink-500 transition-all"
// // //         >
// // //           {loading ? "Searching..." : "Search"}
// // //         </button>
// // //       </form>

// // //       {/* Models Grid */}
// // //       {loading ? (
// // //         <div className="flex justify-center items-center min-h-[200px]">
// // //           <span className="loading loading-spinner loading-lg text-primary"></span>
// // //         </div>
// // //       ) : filteredModels.length > 0 ? (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //           {filteredModels.map((model) => (
// // //             <ModelCard
// // //               key={model._id}
// // //               model={model}
// // //               canDelete={user?.email === model.email} 
// // //             />
// // //           ))}
// // //         </div>
// // //       ) : (
// // //         <p className="text-center text-gray-500 mt-10">No models found. </p>
// // //       )}
// // //     </div>
// // //   );
// // // };


// // // export default AllModels;

// // import { useLoaderData } from "react-router-dom";
// // import { ModelCard } from "../../components/ModelCard";
// // import { useState, useEffect, useContext } from "react";
// // import { AuthContext } from "../../context/AuthContext";
// // import LoadingSpinner from "../../components/LodingSpinner/LodingSpinner";

// // const AllModels = () => {
// //   const loaderData = useLoaderData();
// //   const initialModels = loaderData?.data || loaderData || [];
// //   const [models, setModels] = useState(initialModels);
// //   const [loading, setLoading] = useState(false);
// //   const { user } = useContext(AuthContext);

// //   useEffect(() => {
// //     setModels(initialModels);
// //   }, [loaderData]);

// //   const handleSearch = async (e) => {
// //     e.preventDefault();
// //     const search_text = e.target.search.value.trim();

// //     // যদি search খালি হয়, সব মডেল দেখাও
// //     if (!search_text) {
// //       setModels(initialModels);
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const res = await fetch(`http://localhost:4000/search?search=${search_text}`);
// //       const json = await res.json();
// //       setModels(json.data || []);
// //       e.target.reset(); // সার্চ শেষে input খালি হবে
// //     } catch (err) {
// //       console.error("Search Error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const filteredModels = models.filter(model => model.email !== "unknown"); 

// //   return (
// //     <div className="px-4 md:px-8 lg:px-16 py-8">
// //       {/* Header */}
// //       <div className="text-center mb-6">
// //         <h1 className="text-3xl font-bold">All Foods</h1>
// //         <p className="text-gray-500 mt-2">Explore food from various categories.</p>
// //       </div>

// //       {/* Search Bar */}
// //       <form
// //         onSubmit={handleSearch}
// //         className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
// //       >
// //         <input
// //           type="search"
// //           name="search"
// //           placeholder="Search models..."
// //           className="w-full sm:w-80 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
// //         />
// //         <button
// //           type="submit"
// //           className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-pink-500 transition-all"
// //         >
// //           {loading ? "Searching..." : "Search"}
// //         </button>
// //       </form>

// //       {/* Models Grid */}
// //       {loading ? (
// //         <div className="flex justify-center items-center min-h-[200px]">
// //           <LoadingSpinner height="h-64" />
// //         </div>
// //       ) : filteredModels.length > 0 ? (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //           {filteredModels.map((model) => (
// //             <ModelCard
// //               key={model._id}
// //               model={model}
// //               canDelete={user?.email === model.email} 
// //             />
// //           ))}
// //         </div>
// //       ) : (
// //         <p className="text-center text-gray-500 mt-10">No models found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default AllModels;

// import { useLoaderData } from "react-router-dom";
// import { ModelCard } from "../../components/ModelCard";
// import { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import LoadingSpinner from "../../components/LodingSpinner/LodingSpinner";

// const AllModels = () => {
//   const loaderData = useLoaderData();
//   const initialModels = loaderData?.data || loaderData || [];
//   const [models, setModels] = useState(initialModels);
//   const [loading, setLoading] = useState(false);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     setModels(initialModels);
//   }, [loaderData]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const search_text = e.target.search.value.trim().toLowerCase();

//     if (!search_text) {
//       setModels(initialModels); // খালি সার্চ হলে সব দেখাও
//       return;
//     }

//     setLoading(true);
//     try {
//       // ক্লায়েন্ট সাইড ফিল্টার (যদি সব ডেটা লোড থাকে)
//       const filtered = initialModels.filter(model =>
//         model.name.toLowerCase().includes(search_text)
//       );
//       setModels(filtered);

//       // যদি সার্ভার সাইড সার্চ করতে চাও:
//       // const res = await fetch(`http://localhost:4000/search?search=${search_text}`);
//       // const json = await res.json();
//       // setModels(json.data || []);

//     } catch (err) {
//       console.error("Search Error:", err);
//     } finally {
//       setLoading(false);
//       e.target.reset(); // সার্চ শেষ হলে ইনপুট খালি হবে
//     }
//   };

//   const filteredModels = models.filter(model => model.email !== "unknown");

//   return (
//     <div className="px-4 md:px-8 lg:px-16 py-8">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold">All Foods</h1>
//         <p className="text-gray-500 mt-2">Explore food from various categories.</p>
//       </div>

//       <form
//         onSubmit={handleSearch}
//         className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
//       >
//         <input
//           type="search"
//           name="search"
//           placeholder="Search foods..."
//           className="w-full sm:w-80 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
//         />
//         <button
//           type="submit"
//           className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-pink-500 transition-all"
//         >
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </form>

//       {loading ? (
//         <div className="flex justify-center items-center min-h-[200px]">
//           <LoadingSpinner height="h-64" />
//         </div>
//       ) : filteredModels.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredModels.map((model) => (
//             <ModelCard
//               key={model._id}
//               model={model}
//               canDelete={user?.email === model.email}
//             />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 mt-10">No foods found.</p>
//       )}
//     </div>
//   );
// };

// export default AllModels;


import { useLoaderData } from "react-router-dom";
import { ModelCard } from "../../components/ModelCard";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LodingSpinner/LodingSpinner";

const AllModels = () => {
  const loaderData = useLoaderData();
  const initialModels = loaderData?.data || loaderData || [];
  const [models, setModels] = useState(initialModels);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setModels(initialModels);
  }, [loaderData]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim().toLowerCase();

    if (!search_text) {
      setModels(initialModels); // খালি সার্চ হলে সব ফুড দেখাও
      return;
    }

    setLoading(true);
    // ক্লায়েন্ট সাইড ফিল্টার
    const filtered = initialModels.filter(model =>
      model.name?.toLowerCase().includes(search_text) // name ফিল্ড চেক করো
    );
    setModels(filtered);
    setLoading(false);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">All Foods</h1>
        <p className="text-gray-500 mt-2">Explore food from various categories.</p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
      >
        <input
          type="search"
          name="search"
          placeholder="Search foods..."
          className="w-full sm:w-80 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold hover:from-red-600 hover:to-pink-500 transition-all"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {models.map((model) => (
            <ModelCard
              key={model._id}
              model={model}
              canDelete={user?.email === model.email}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No foods found.</p>
      )}
    </div>
  );
};

export default AllModels;
