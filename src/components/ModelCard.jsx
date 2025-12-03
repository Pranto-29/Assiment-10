
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

// export default ModelCard


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
    location,
  } = model;

  const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden">
      {/* Image */}
      <figure className="h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={imgSrc}
          alt={title || "No Title"}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4 sm:p-5 md:p-6">
        {/* Title */}
        <h2 className="card-title text-sm sm:text-base md:text-lg font-semibold">
          {title || "No Title"}
        </h2>

        {/* Category */}
        <div className="badge badge-secondary text-xs sm:text-sm rounded-full mt-1">
          {category || "No Category"}
        </div>

        {/* Seller & Location */}
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Seller: {seller_name || "Unknown"}
        </p>
        <p className="text-xs sm:text-sm text-gray-500">
          Location: {location || "Unknown"}
        </p>

        {/* Description */}
        <p className="line-clamp-2 text-xs sm:text-sm mt-2 text-gray-600">
          {description || "No description available"}
        </p>

        {/* Price */}
        <div className="text-sm sm:text-base font-semibold mt-2">
          Price: ৳{price_min || 0} - ৳{price_max || 0}
        </div>

        {/* View Details Button */}
        <div className="card-actions justify-center mt-4">
          <Link
            to={`/model-details/${_id}`}
            className="btn btn-sm sm:btn-md w-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500 rounded-full transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
