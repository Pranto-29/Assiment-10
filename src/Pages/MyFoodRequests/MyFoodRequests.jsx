// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const MyFoodRequests = () => {
//   const { user } = useContext(AuthContext);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) return;

//     fetch(`http://localhost:4000/my-food-requests?email=${user.email}`, {
//       headers: {
//         authorization: `Bearer ${user.accessToken}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setRequests(data.data || []))
//       .finally(() => setLoading(false));
//   }, [user]);

//   if (loading)
//     return <div className="text-center py-20 loading loading-bars loading-xl">Loading your requests...</div>;

//   return (
//     <div className="px-4 md:px-8 lg:px-16 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">My Food Requests</h1>

//       {requests.length > 0 ? (
//         <ul className="space-y-4">
//           {requests.map((req) => (
//             <li key={req._id} className="border p-4 rounded shadow">
//               <p>
//                 <strong>Food:</strong> {req.foodName}
//               </p>
//               <p>
//                 <strong>Requester:</strong> {req.requesterName}
//               </p>
//               <p>
//                 <strong>Requested On:</strong>{" "}
//                 {new Date(req.createdAt).toLocaleDateString()}
//               </p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-center text-gray-500">No requests found.</p>
//       )}
//     </div>
//   );
// };

// export default MyFoodRequests;

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:4000/my-food-requests?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Food Requests</h1>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="shadow-lg p-5 rounded-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">
                Food: {req.foodTitle}
              </h2>

              <p><span className="font-bold">Location:</span> {req.location}</p>
              <p><span className="font-bold">Reason:</span> {req.reason}</p>
              <p><span className="font-bold">Contact:</span> {req.contact}</p>

              <p className="mt-3">
                <span className="font-bold">Status:</span>{" "}
                <span
                  className={`px-3 py-1 rounded text-white ${
                    req.status === "pending"
                      ? "bg-yellow-500"
                      : req.status === "accepted"
                      ? "bg-blue-500"
                      : "bg-green-600"
                  }`}
                >
                  {req.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFoodRequests;
