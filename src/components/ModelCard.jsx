

// import { Link } from "react-router-dom";

// export const ModelCard = ({ model }) => {
//   const {
//     title,
//     image,
//     thumbnail,
//     category,
//     description,
//     _id,
//     seller_name,
//     price_min,
//     price_max,
//     location
//   } = model;

//   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

//   return (
//     <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//       <figure className="h-48 overflow-hidden">
//         <img
//           src={imgSrc}
//           alt={title || "No Title"}
//           className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//         />
//       </figure>

//       <div className="card-body">
//         <h2 className="card-title">{title || "No Title"}</h2>

//         <div className="badge text-xs badge-secondary rounded-full">
//           {category || "No Category"}
//         </div>

//         <p className="text-xs text-secondary">
//           Seller: {seller_name || "Unknown"}
//         </p>

//         <p className="text-xs text-secondary">
//           Location: {location || "Unknown"}
//         </p>

//         <p className="line-clamp-2">{description || "No description available"}</p>

//         <div className="text-sm font-semibold">
//           Price: ৳{price_min || 0} - ৳{price_max || 0}
//         </div>

//         <div className="card-actions justify-end mt-2">
//           <Link
//             to={`/model-details/${_id}`}
//             className="btn btn-sm rounded-full w-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };


import { Link } from "react-router-dom";

export const ModelCard = ({ model }) => {
  const {
    title,
    image,
    thumbnail,
    category,
    description,
    _id,
    seller_name,
    price_min,
    price_max,
    location
  } = model;

  const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={title || "No Title"}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title || "No Title"}</h2>

        <div className="badge text-xs badge-secondary rounded-full">
          {category || "No Category"}
        </div>

        <p className="text-xs text-secondary">
          Seller: {seller_name || "Unknown"}
        </p>

        <p className="text-xs text-secondary">
          Location: {location || "Unknown"}
        </p>

        <p className="line-clamp-2">{description || "No description available"}</p>

        <div className="text-sm font-semibold">
          Price: ৳{price_min || 0} - ৳{price_max || 0}
        </div>

        <div className="card-actions justify-end mt-2">
          <Link
            to={`/model-details/${_id}`}
            className="btn btn-sm rounded-full w-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard


// import { Link } from "react-router-dom";

// const ModelCard = ({ model }) => {
//   const {
//     title,
//     image,
//     thumbnail,
//     category,
//     description,
//     _id,
//     seller_name,
//     price_min,
//     price_max,
//     location
//   } = model;

//   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden">
      
//       {/* Image */}
//       <figure className="h-48 md:h-56 overflow-hidden">
//         <img
//           src={imgSrc}
//           alt={title || "No Title"}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </figure>

//       {/* Card Content */}
//       <div className="p-4 flex flex-col flex-1">
//         <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-2">{title || "No Title"}</h2>

//         <div className="flex flex-wrap gap-2 mt-2">
//           <span className="badge badge-sm badge-secondary">{category || "No Category"}</span>
//           <span className="text-xs text-gray-500 dark:text-gray-400">Seller: {seller_name || "Unknown"}</span>
//         </div>

//         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Location: {location || "Unknown"}</p>
//         <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{description || "No description available"}</p>

//         <div className="mt-auto text-sm font-semibold text-pink-600 dark:text-pink-400 mt-4">
//           Price: ৳{price_min || 0} - ৳{price_max || 0}
//         </div>

//         <Link
//           to={`/model-details/${_id}`}
//           className="mt-3 px-4 py-2 rounded-full w-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500 text-center transition-all shadow-md hover:shadow-lg"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ModelCard;
