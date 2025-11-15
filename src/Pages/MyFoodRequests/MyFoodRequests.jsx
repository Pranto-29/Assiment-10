import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:4000/my-food-requests?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setRequests(data.data || []))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading)
    return <div className="text-center py-20">Loading your requests...</div>;

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Food Requests</h1>

      {requests.length > 0 ? (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li key={req._id} className="border p-4 rounded shadow">
              <p>
                <strong>Food:</strong> {req.foodName}
              </p>
              <p>
                <strong>Requester:</strong> {req.requesterName}
              </p>
              <p>
                <strong>Requested On:</strong>{" "}
                {new Date(req.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No requests found.</p>
      )}
    </div>
  );
};

export default MyFoodRequests;
