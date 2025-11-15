

// // import { Link } from "react-router-dom";

// // export const ModelCard = ({ model }) => {
// //   const {
// //     title,
// //     image,
// //     thumbnail,
// //     category,
// //     description,
// //     _id,
// //     seller_name,
// //     price_min,
// //     price_max,
// //     location
// //   } = model;

// //   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

// //   return (
// //     <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
// //       <figure className="h-48 overflow-hidden">
// //         <img
// //           src={imgSrc}
// //           alt={title || "No Title"}
// //           className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
// //         />
// //       </figure>

// //       <div className="card-body">
// //         <h2 className="card-title">{title || "No Title"}</h2>

// //         <div className="badge text-xs badge-secondary rounded-full">
// //           {category || "No Category"}
// //         </div>

// //         <p className="text-xs text-secondary">
// //           Seller: {seller_name || "Unknown"}
// //         </p>

// //         <p className="text-xs text-secondary">
// //           Location: {location || "Unknown"}
// //         </p>

// //         <p className="line-clamp-2">{description || "No description available"}</p>

// //         <div className="text-sm font-semibold">
// //           Price: ৳{price_min || 0} - ৳{price_max || 0}
// //         </div>

// //         <div className="card-actions justify-end mt-2">
// //           <Link
// //             to={`/model-details/${_id}`}
// //             className="btn btn-sm rounded-full w-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500"
// //           >
// //             View Details
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // import { Link } from "react-router-dom";

// // export const ModelCard = ({ model }) => {
// //   const {
// //     title,
// //     image,
// //     thumbnail,
// //     category,
// //     description,
// //     _id,
// //     seller_name,
// //     price_min,
// //     price_max,
// //     location
// //   } = model;

// //   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

// //   return (
// //     <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
// //       <figure className="h-48 overflow-hidden">
// //         <img
// //           src={imgSrc}
// //           alt={title || "No Title"}
// //           className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
// //         />
// //       </figure>

// //       <div className="card-body">
// //         <h2 className="card-title">{title || "No Title"}</h2>

// //         <div className="badge text-xs badge-secondary rounded-full">
// //           {category || "No Category"}
// //         </div>

// //         <p className="text-xs text-secondary">
// //           Seller: {seller_name || "Unknown"}
// //         </p>

// //         <p className="text-xs text-secondary">
// //           Location: {location || "Unknown"}
// //         </p>

// //         <p className="line-clamp-2">{description || "No description available"}</p>

// //         <div className="text-sm font-semibold">
// //           Price: ৳{price_min || 0} - ৳{price_max || 0}
// //         </div>

// //         <div className="card-actions justify-end mt-2">
// //           <Link
// //             to={`/model-details/${_id}`}
// //             className="btn btn-sm rounded-full w-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500"
// //           >
// //             View Details
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export const ModelCard = ({ model }) => {
  const {
    title,
    name,
    image,
    thumbnail,
    category,
    description,
    _id,
    seller_name,
    price_min,
    price_max,
    price,        // <--- for users who store single price
    location
  } = model;


  
  const imgSrc =
    image?.trim()
      ? image
      : thumbnail?.trim()
      ? thumbnail
      : "https://via.placeholder.com/400";

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={title || name || "No Title"}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title || name || "No Title"}</h2>

        <div className="badge text-xs badge-secondary rounded-full">
          {category || "No Category"}
        </div>

        {/* Seller */}
        <p className="text-xs text-secondary">
          Seller: {seller_name || "Unknown"}
        </p>

        {/* Location */}
        <p className="text-xs text-secondary">
          Location: {location || "Not provided"}
        </p>

        {/* Description */}
        <p className="line-clamp-2">
          {description || "No description available"}
        </p>

        {/* Price Fix */}
        <div className="text-sm font-semibold">
          {price_min || price_max ? (
            <>Price: ৳{price_min || 0} - ৳{price_max || 0}</>
          ) : price ? (
            <>Price: ৳{price}</>
          ) : (
            <>Price: Not provided</>
          )}
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

