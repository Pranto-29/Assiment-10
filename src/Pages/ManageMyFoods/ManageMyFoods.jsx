


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:4000/manage-my-foods?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setFoods(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this food?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/foods/${id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(() => setFoods(prev => prev.filter(f => f._id !== id)));
      }
    });
  };

  if (loading) return <p className="text-center mt-10">Loading foods...</p>;
  if (foods.length === 0) return <p className="text-center mt-10">No foods added yet.</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">Manage My Foods</h1>
      <table className="table table-zebra w-full text-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price Min</th>
            <th>Price Max</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map(food => (
            <tr key={food._id}>
              <td>
                <img 
                  src={food.thumbnail || "https://via.placeholder.com/80"} 
                  alt={food.name} 
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td>{food.name}</td>
              <td>{food.category}</td>
              <td>{food.description}</td>
              <td>৳{food.price_min}</td>
              <td>৳{food.price_max}</td>
              <td className="flex gap-2 justify-center">
                <Link to={`/update-food/${food._id}`}>
                  <button className="btn btn-sm btn-info">Update</button>
                </Link>
                <button 
                  onClick={() => handleDelete(food._id)} 
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyFoods;
