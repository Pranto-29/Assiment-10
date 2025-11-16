

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
