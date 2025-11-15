// // // // // // // import { use, useEffect, useState } from "react";
// // // // // // // import { Link, useNavigate, useParams } from "react-router";
// // // // // // // import Swal from "sweetalert2";
// // // // // // // import { AuthContext } from "../../context/AuthContext";
// // // // // // // import toast from "react-hot-toast";

// // // // // // // const ModelDetails = () => {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { id } = useParams();
// // // // // // //   const [model, setModel] = useState({});
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const { user } = use(AuthContext);
// // // // // // //   const [refetch, setRefecth] = useState(false)

// // // // // // //   useEffect(() => {
// // // // // // //     fetch(`https://3d-model-server.vercel.app/models/${id}`, {
// // // // // // //       headers: {
// // // // // // //         authorization: `Bearer ${user.accessToken}`,
// // // // // // //       },
// // // // // // //     })
// // // // // // //       .then((res) => res.json())
// // // // // // //       .then((data) => {
// // // // // // //         setModel(data.result);
// // // // // // //         console.log(" Api called!")
// // // // // // //         console.log(data);
// // // // // // //         setLoading(false);
// // // // // // //       });
// // // // // // //   }, [user, id, refetch]);

// // // // // // //   const handleDlete = () => {
// // // // // // //     Swal.fire({
// // // // // // //       title: "Are you sure?",
// // // // // // //       text: "You won't be able to revert this!",
// // // // // // //       icon: "warning",
// // // // // // //       showCancelButton: true,
// // // // // // //       confirmButtonColor: "#3085d6",
// // // // // // //       cancelButtonColor: "#d33",
// // // // // // //       confirmButtonText: "Yes, delete it!",
// // // // // // //     }).then((result) => {
// // // // // // //       if (result.isConfirmed) {
// // // // // // //         fetch(`https://3d-model-server.vercel.app/models/${model._id}`, {
// // // // // // //           method: "DELETE",
// // // // // // //           headers: {
// // // // // // //             "Content-Type": "application/json",
// // // // // // //           },
// // // // // // //         })
// // // // // // //           .then((res) => res.json())
// // // // // // //           .then((data) => {
// // // // // // //             console.log(data);
// // // // // // //             navigate("/all-models");

// // // // // // //             Swal.fire({
// // // // // // //               title: "Deleted!",
// // // // // // //               text: "Your file has been deleted.",
// // // // // // //               icon: "success",
// // // // // // //             });
// // // // // // //           })
// // // // // // //           .catch((err) => {
// // // // // // //             console.log(err);
// // // // // // //           });
// // // // // // //       }
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleDownload = () => {
// // // // // // //     const finalModel = {
// // // // // // //       name: model.name,
// // // // // // //       downloads: model.downloads,
// // // // // // //       created_by: model.created_by,
// // // // // // //       description: model.description,
// // // // // // //       thumbnail: model.thumbnail,
// // // // // // //       created_at: new Date(),
// // // // // // //       downloaded_by: user.email,
// // // // // // //     };

// // // // // // //     fetch(`https://3d-model-server.vercel.app/downloads/${model._id}`, {
// // // // // // //       method: "POST",
// // // // // // //       headers: {
// // // // // // //         "Content-Type": "application/json",
// // // // // // //       },
// // // // // // //       body: JSON.stringify(finalModel),
// // // // // // //     })
// // // // // // //       .then((res) => res.json())
// // // // // // //       .then((data) => {
// // // // // // //         console.log(data);
// // // // // // //         toast.success("Successfully downloaded!");
// // // // // // //         setRefecth(!refetch)

// // // // // // //         // alternative solution of realtime download count update

// // // // // // //     //     fetch(`https://3d-model-server.vercel.app/models/${id}`, {
// // // // // // //     //   headers: {
// // // // // // //     //     authorization: `Bearer ${user.accessToken}`,
// // // // // // //     //   },
// // // // // // //     // })
// // // // // // //     //   .then((res) => res.json())
// // // // // // //     //   .then((data) => {
// // // // // // //     //     setModel(data.result);
// // // // // // //     //     console.log(" Api called!")
// // // // // // //     //     console.log(data);
// // // // // // //     //     setLoading(false);
// // // // // // //     //   });

// // // // // // //       })
// // // // // // //       .catch((err) => {
// // // // // // //         console.log(err);
// // // // // // //       });
// // // // // // //   };

// // // // // // //   if (loading) {
// // // // // // //     return <div> Loading...</div>;
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
// // // // // // //       <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
// // // // // // //         <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
// // // // // // //           <div className="shrink-0 w-full md:w-1/2">
// // // // // // //             <img
// // // // // // //               src={model.thumbnail}
// // // // // // //               alt=""
// // // // // // //               className="w-full object-cover rounded-xl shadow-md"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
// // // // // // //             <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
// // // // // // //               {model.name}
// // // // // // //             </h1>

// // // // // // //             <div className="flex gap-3">
// // // // // // //               <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
// // // // // // //                 {model.category}
// // // // // // //               </div>

// // // // // // //               <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
// // // // // // //                 Downloaded: {model.downloads}
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             <p className="text-gray-600 leading-relaxed text-base md:text-lg">
// // // // // // //               {model.description}
// // // // // // //             </p>

// // // // // // //             <div className="flex gap-3 mt-6">
// // // // // // //               <Link
// // // // // // //                 to={`/update-model/${model._id}`}
// // // // // // //                 className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
// // // // // // //               >
// // // // // // //                 Update Model
// // // // // // //               </Link>
// // // // // // //               <button
// // // // // // //                 onClick={handleDownload}
// // // // // // //                 className="btn btn-secondary rounded-full"
// // // // // // //               >
// // // // // // //                 Download
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 onClick={handleDlete}
// // // // // // //                 className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
// // // // // // //               >
// // // // // // //                 Delete
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ModelDetails;


// // // // // import { useContext, useEffect, useState } from "react";
// // // // // import { Link, useNavigate, useParams } from "react-router-dom";
// // // // // import Swal from "sweetalert2";
// // // // // import { AuthContext } from "../../context/AuthContext";
// // // // // import toast from "react-hot-toast";

// // // // // const ModelDetails = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const { id } = useParams();
// // // // //   const { user } = useContext(AuthContext); 
// // // // //   const [model, setModel] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [refetch, setRefetch] = useState(false);

// // // // //   useEffect(() => {
// // // // //     if (!user) return; 
// // // // //     setLoading(true);

// // // // //     fetch(`https://3d-model-server.vercel.app/models/${id}`, {
// // // // //       headers: {
// // // // //         authorization: `Bearer ${user.accessToken}`,
// // // // //       },
// // // // //     })
// // // // //       .then((res) => res.json())
// // // // //       .then((data) => {
// // // // //         setModel(data.result);
// // // // //         setLoading(false);
// // // // //       })
// // // // //       .catch((err) => {
// // // // //         console.error(err);
// // // // //         setLoading(false);
// // // // //       });
// // // // //   }, [user, id, refetch]);

// // // // //   const handleDelete = () => {
// // // // //     if (!model?._id) return;

// // // // //     Swal.fire({
// // // // //       title: "Are you sure?",
// // // // //       text: "This model will be permanently deleted.",
// // // // //       icon: "warning",
// // // // //       showCancelButton: true,
// // // // //       confirmButtonColor: "#3085d6",
// // // // //       cancelButtonColor: "#d33",
// // // // //       confirmButtonText: "Yes, delete it!",
// // // // //     }).then((result) => {
// // // // //       if (result.isConfirmed) {
// // // // //         fetch(`https://3d-model-server.vercel.app/models/${model._id}`, {
// // // // //           method: "DELETE",
// // // // //           headers: {
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //         })
// // // // //           .then((res) => res.json())
// // // // //           .then(() => {
// // // // //             Swal.fire("Deleted!", "Your model has been deleted.", "success");
// // // // //             navigate("/all-models");
// // // // //           })
// // // // //           .catch((err) => console.error(err));
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   const handleDownload = () => {
// // // // //     if (!model || !user) return;

// // // // //     const finalModel = {
// // // // //       name: model.name,
// // // // //       downloads: model.downloads,
// // // // //       created_by: model.created_by,
// // // // //       description: model.description,
// // // // //       thumbnail: model.thumbnail,
// // // // //       created_at: new Date(),
// // // // //       downloaded_by: user.email,
// // // // //     };

// // // // //     fetch(`https://3d-model-server.vercel.app/downloads/${model._id}`, {
// // // // //       method: "POST",
// // // // //       headers: {
// // // // //         "Content-Type": "application/json",
// // // // //       },
// // // // //       body: JSON.stringify(finalModel),
// // // // //     })
// // // // //       .then((res) => res.json())
// // // // //       .then(() => {
// // // // //         toast.success("Successfully downloaded!");
// // // // //         setRefetch(!refetch);
// // // // //       })
// // // // //       .catch((err) => console.error(err));
// // // // //   };

  
// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="flex justify-center items-center min-h-screen">
// // // // //         <span className="loading loading-spinner loading-lg text-primary"></span>
// // // // //       </div>
// // // // //     );
// // // // //   }


// // // // //   if (!model) {
// // // // //     return (
// // // // //       <div className="text-center mt-20 text-gray-500 text-lg">
// // // // //         Model not found or deleted.
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
// // // // //       <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
// // // // //         <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
// // // // //           <div className="shrink-0 w-full md:w-1/2">
// // // // //             <img
// // // // //               src={model?.thumbnail}
// // // // //               alt={model?.name}
// // // // //               className="w-full object-cover rounded-xl shadow-md"
// // // // //             />
// // // // //           </div>

// // // // //           <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
// // // // //             <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
// // // // //               {model?.name}
// // // // //             </h1>

// // // // //             <div className="flex gap-3">
// // // // //               <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
// // // // //                 {model?.category}
// // // // //               </div>

// // // // //               <div className="badge badge-lg badge-outline text-blue-600 border-blue-600 font-medium">
// // // // //                 Downloads: {model?.downloads || 0}
// // // // //               </div>
// // // // //             </div>

// // // // //             <p className="text-gray-600 leading-relaxed text-base md:text-lg">
// // // // //               {model?.description}
// // // // //             </p>

// // // // //             <div className="flex gap-3 mt-6">
// // // // //               <Link
// // // // //                 to={`/update-model/${model?._id}`}
// // // // //                 className="btn btn-primary rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
// // // // //               >
// // // // //                 Update
// // // // //               </Link>
// // // // //               <button
// // // // //                 onClick={handleDownload}
// // // // //                 className="btn btn-secondary rounded-full"
// // // // //               >
// // // // //                 Download
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={handleDelete}
// // // // //                 className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
// // // // //               >
// // // // //                 Delete
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ModelDetails;

// // // // // import { useLoaderData } from "react-router-dom";

// // // // // const ModelDetails = () => {
// // // // //   const data = useLoaderData();
// // // // //   const model = data.data || data; // adjust according to backend response

// // // // //   if (!model) return <p className="text-center mt-10">No data found</p>;

// // // // //   const { title, image, thumbnail, category, seller_name, description, price_min, price_max, location } = model;

// // // // //   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

// // // // //   return (
// // // // //     <div className="max-w-3xl mx-auto p-5">
// // // // //       <div className="card bg-base-100 shadow-xl rounded-2xl">
// // // // //         <figure className="h-72 overflow-hidden rounded-t-2xl">
// // // // //           <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
// // // // //         </figure>

// // // // //         <div className="card-body">
// // // // //           <h1 className="text-2xl font-bold">{title}</h1>
// // // // //           <div className="badge badge-secondary">{category}</div>
// // // // //           <p><strong>Seller:</strong> {seller_name}</p>
// // // // //           <p><strong>Location:</strong> {location}</p>
// // // // //           <p>{description}</p>
// // // // //           <p className="text-lg font-semibold text-pink-600">
// // // // //             Price: ৳{price_min} - ৳{price_max}
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ModelDetails;


// // // // import { useLoaderData } from "react-router-dom";

// // // // const ModelDetails = () => {
// // // //   const data = useLoaderData();
// // // //   const model = data?.data || data || {}; // safe fallback

// // // //   if (!model || Object.keys(model).length === 0) {
// // // //     return <p className="text-center mt-10 text-lg">No data found</p>;
// // // //   }

// // // //   // Destructure fields
// // // //   const {
// // // //     title,
// // // //     name,         // <--- new food name
// // // //     image,
// // // //     thumbnail,
// // // //     category,
// // // //     seller_name,
// // // //     description,
// // // //     price_min,
// // // //     price_max,
// // // //     location,
// // // //   } = model;

// // // //   // Display title: prefer title, then name
// // // //   <h2 className="card-title">{title || name || "No Title"}</h2>


// // // //   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

// // // //   return (
// // // //     <div className="max-w-3xl mx-auto p-5">
// // // //       <div className="card bg-base-100 shadow-xl rounded-2xl">
// // // //         <figure className="h-72 overflow-hidden rounded-t-2xl">
// // // //           <img
// // // //             src={imgSrc}
// // // //             alt={displayTitle}
// // // //             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// // // //           />
// // // //         </figure>

// // // //         <div className="card-body space-y-2">
// // // //           <h1 className="text-3xl font-bold text-gray-800">{displayTitle}</h1>
// // // //           <div className="badge badge-secondary">{category || "No Category"}</div>

// // // //           <p>
// // // //             <strong>Seller:</strong> {seller_name || "Unknown"}
// // // //           </p>
// // // //           <p>
// // // //             <strong>Location:</strong> {location || "Unknown"}
// // // //           </p>
// // // //           <p className="text-gray-600">{description || "No description available"}</p>

// // // //           <p className="text-lg font-semibold text-pink-600">
// // // //             Price: ৳{price_min || 0} - ৳{price_max || 0}
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ModelDetails;


// // // import { useLoaderData } from "react-router-dom";

// // // const ModelDetails = () => {
// // //   const data = useLoaderData();
// // //   const model = data?.data || data || {}; // safe fallback

// // //   if (!model || Object.keys(model).length === 0) {
// // //     return <p className="text-center mt-10 text-lg">No data found</p>;
// // //   }

// // //   // Destructure fields
// // //   const {
// // //     title,
// // //     name, // <-- new food name
// // //     image,
// // //     thumbnail,
// // //     category,
// // //     seller_name,
// // //     description,
// // //     price_min,
// // //     price_max,
// // //     location,
// // //   } = model;

// // //   // Display title: prefer title, then name
// // //   const displayTitle = title || name || "No Title";

// // //   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

// // //   return (
// // //     <div className="max-w-3xl mx-auto p-5">
// // //       <div className="card bg-base-100 shadow-xl rounded-2xl">
// // //         <figure className="h-72 overflow-hidden rounded-t-2xl">
// // //           <img
// // //             src={imgSrc}
// // //             alt={displayTitle}
// // //             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// // //           />
// // //         </figure>

// // //         <div className="card-body space-y-2">
// // //           <h1 className="text-3xl font-bold text-gray-800">{displayTitle}</h1>
// // //           <div className="badge badge-secondary">{category || "No Category"}</div>

// // //           <p>
// // //             <strong>Seller:</strong> {seller_name || "Unknown"}
// // //           </p>
// // //           <p>
// // //             <strong>Location:</strong> {location || "Unknown"}
// // //           </p>
// // //           <p className="text-gray-600">{description || "No description available"}</p>

// // //           <p className="text-lg font-semibold text-pink-600">
// // //             Price: ৳{price_min || 0} - ৳{price_max || 0}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ModelDetails;



// // import { useLoaderData } from "react-router-dom";

// // const ModelDetails = () => {
// //   const data = useLoaderData();
// //   const model = data?.data || data || {};

// //   if (!model || Object.keys(model).length === 0) {
// //     return <p className="text-center mt-10 text-lg">No data found</p>;
// //   }

// //   const displayTitle = model.title || model.name || "No Title"; // <-- fixed

// //   const imgSrc = model.image || model.thumbnail || "https://via.placeholder.com/400";

// //   return (
// //     <div className="max-w-3xl mx-auto p-5">
// //       <div className="card bg-base-100 shadow-xl rounded-2xl">
// //         <figure className="h-72 overflow-hidden rounded-t-2xl">
// //           <img
// //             src={imgSrc}
// //             alt={displayTitle}
// //             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// //           />
// //         </figure>

// //         <div className="card-body space-y-2">
// //           <h1 className="text-3xl font-bold text-gray-800">{displayTitle}</h1>
// //           <div className="badge badge-secondary">{model.category || "No Category"}</div>

// //           <p><strong>Seller:</strong> {model.seller_name || "Unknown"}</p>
// //           <p><strong>Location:</strong> {model.location || "Unknown"}</p>
// //           <p className="text-gray-600">{model.description || "No description available"}</p>

// //           <p className="text-lg font-semibold text-pink-600">
// //             Price: ৳{model.price_min || 0} - ৳{model.price_max || 0}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ModelDetails;

// import { useLoaderData } from "react-router-dom";

// const ModelDetails = () => {
//   const data = useLoaderData();
//   const model = data?.data || data || {};

//   if (!model || Object.keys(model).length === 0) {
//     return <p className="text-center mt-10 text-lg">No data found</p>;
//   }

//   const displayTitle = model.title || model.name || "No Title"; // <-- fixed

//   const imgSrc = model.image || model.thumbnail || "https://via.placeholder.com/400";

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <div className="card bg-base-100 shadow-xl rounded-2xl">
//         <figure className="h-72 overflow-hidden rounded-t-2xl">
//           <img
//             src={imgSrc}
//             alt={displayTitle}
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//           />
//         </figure>

//         <div className="card-body space-y-2">
//           <h1 className="text-3xl font-bold text-gray-800">{displayTitle}</h1>
//           <div className="badge badge-secondary">{model.category || "No Category"}</div>

//           <p><strong>Seller:</strong> {model.seller_name || "Unknown"}</p>
//           <p><strong>Location:</strong> {model.location || "Unknown"}</p>
//           <p className="text-gray-600">{model.description || "No description available"}</p>

//           <p className="text-lg font-semibold text-pink-600">
//             Price: ৳{model.price_min || 0} - ৳{model.price_max || 0}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelDetails;


import { useLoaderData } from "react-router-dom";

const ModelDetails = () => {
  const data = useLoaderData();
  const model = data?.data || data || {}; // safe fallback

  if (!model || Object.keys(model).length === 0) {
    return <p className="text-center mt-10 text-lg">No data found</p>;
  }

  // Prefer title, fallback to name
  const displayTitle = model.title || model.name || "No Title";

  const {
    image,
    thumbnail,
    category,
    seller_name,
    description,
    price_min,
    price_max,
    location,
  } = model;

  const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

  return (
    <div className="max-w-3xl mx-auto p-5">
      <div className="card bg-base-100 shadow-xl rounded-2xl">
        <figure className="h-72 overflow-hidden rounded-t-2xl">
          <img
            src={imgSrc}
            alt={displayTitle}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>

        <div className="card-body space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">{displayTitle}</h1>
          <div className="badge badge-secondary">{category || "No Category"}</div>

          <p>
            <strong>Seller:</strong> {seller_name || "Unknown"}
          </p>
          <p>
            <strong>Location:</strong> {location || "Unknown"}
          </p>
          <p className="text-gray-600">{description || "No description available"}</p>

          <p className="text-lg font-semibold text-pink-600">
            Price: ৳{price_min || 0} - ৳{price_max || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
