import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/my-food-requests?email=${user.email}`,
          {
            headers: { authorization: `Bearer ${user.accessToken}` },
          }
        );
        const data = await res.json();
        if (data.success) {
          setRequests(data.data || []);
        } else {
          setError(data.message || "Failed to load requests");
        }
      } catch (err) {
        console.error(err);
        setError("Server error. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user]);

  

  if (loading)
    return (
      <div className="text-center py-20 loading loading-bars loading-xl bg-amber-500">
        Loading your requests...
      </div>
    );

  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 bg">
      <h1 className="text-3xl font-bold text-center mb-6">My Food Requests</h1>

      {requests.length > 0 ? (
        <ul className="space-y-4 n bg-pink-400 border-2 rounded-2xl">
          {requests.map((req) => (
            <li key={req._id} className="border p-4 rounded shadow">
              <p>
                <strong>Food:</strong> {req.foodName}
              </p>
              <p>
                <strong>Location:</strong> {req.location}
              </p>
              <p>
                <strong>Contact:</strong> {req.contact}
              </p>
              <p>
                <strong>Reason:</strong> {req.reason}
              </p>
              <p>
                <strong>Requested On:</strong>{" "}
                {new Date(req.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    req.status === "pending"
                      ? "text-yellow-500"
                      : req.status === "approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {req.status}
                </span>
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
