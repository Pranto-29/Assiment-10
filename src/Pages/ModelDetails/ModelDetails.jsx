

// import { useLoaderData } from "react-router-dom";

// const ModelDetails = () => {
//   const data = useLoaderData();
//   const model = data?.data || data || {}; // safe fallback

//   if (!model || Object.keys(model).length === 0) {
//     return <p className="text-center mt-10 text-lg">No data found</p>;
//   }

//   // Prefer title, fallback to name
//   const displayTitle = model.title || model.name || "No Title";

//   const {
//     image,
//     thumbnail,
//     category,
//     seller_name,
//     description,
//     price_min,
//     price_max,
//     location,
//   } = model;

//   const imgSrc = image || thumbnail || "https://via.placeholder.com/400";

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
//           <div className="badge badge-secondary">{category || "No Category"}</div>

//           <p>
//             <strong>Seller:</strong> {seller_name || "Unknown"}
//           </p>
//           <p>
//             <strong>Location:</strong> {location || "Unknown"}
//           </p>
//           <p className="text-gray-600">{description || "No description available"}</p>

//           <p className="text-lg font-semibold text-pink-600">
//             Price: ৳{price_min || 0} - ৳{price_max || 0}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelDetails;


import { useLoaderData } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ModelDetails = () => {
  const data = useLoaderData();
  const model = data?.data || data || {}; // safe fallback
  const { user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [reasonInput, setReasonInput] = useState("");
  const [contactInput, setContactInput] = useState("");

  if (!model || Object.keys(model).length === 0) {
    return <p className="text-center mt-10 text-lg">No data found</p>;
  }

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

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login first");

    const requestData = {
      foodId: model._id,
      foodName: displayTitle,
      requesterEmail: user.email,
      requesterName: user.displayName,
      requesterPhoto: user.photoURL,
      location: locationInput,
      reason: reasonInput,
      contact: contactInput,
      status: "pending",
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:4000/foodRequests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      const result = await res.json();
      if (result.success) {
        alert("Request submitted successfully!");
        setShowModal(false);
        setLocationInput("");
        setReasonInput("");
        setContactInput("");
      } else {
        alert(result.message || "Failed to submit request");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

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

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
          >
            Request Food
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-pink bg-opacity-50 flex justify-center items-center z-50 bg-teal-500">
          <form
            onSubmit={handleSubmitRequest}
            className="bg-blue p-6 rounded w-96 space-y-4 bg-fuchsia-500"
          >
            <h2 className="text-xl font-bold">Request Food</h2>

            <input
              type="text"
              placeholder="Location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              required
              className="border p-2 w-full rounded"
            />

            <textarea
              placeholder="Why Need Food"
              value={reasonInput}
              onChange={(e) => setReasonInput(e.target.value)}
              required
              className="border p-2 w-full rounded"
            />

            <input
              type="text"
              placeholder="Contact No."
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              required
              className="border p-2 w-full rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-blue rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModelDetails;
