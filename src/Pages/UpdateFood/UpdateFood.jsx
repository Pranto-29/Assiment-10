
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null); // প্রথমে null

  // Load food data from backend
  useEffect(() => {
    fetch(`http://localhost:4000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data)) // data.data নয়, শুধু data
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to load food data", "error");
      });
  }, [id]);

  // Handle form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!food) return;

    const updatedFood = {
      title: e.target.foodName.value || food.title,
      price_min:
        e.target.priceMin.value !== "" ? Number(e.target.priceMin.value) : food.price_min,
      price_max:
        e.target.priceMax.value !== "" ? Number(e.target.priceMax.value) : food.price_max,
      category: e.target.category.value || food.category,
      description: e.target.description.value || food.description,
      created_at: e.target.expireDate.value || food.created_at,
      image: e.target.image.value || food.image,
    };

    fetch(`http://localhost:4000/foods/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Updated!", "Food updated successfully!", "success");
          navigate("/manage-my-foods");
        } else {
          Swal.fire("Error!", data.message || "Failed to update food", "error");
        }
      })
      .catch(() => Swal.fire("Error!", "Server error", "error"));
  };

  // Loading state
  if (!food) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-pink-400 rounded p-3">
      <h2 className="text-2xl font-bold mb-4 text-center justify-center items-center hover:bg-emerald-400">Update Food</h2>
      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          name="foodName"
          defaultValue={food.title}
          placeholder="Food Name"
          className="input input-bordered w-full text-red "
        />
        <input
          type="number"
          name="priceMin"
          defaultValue={food.price_min}
          placeholder="Price Min"
          className="input input-bordered w-full bg-blue-300"
        />
        <input
          type="number"
          name="priceMax"
          defaultValue={food.price_max}
          placeholder="Price Max"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="category"
          defaultValue={food.category}
          placeholder="Category"
          className="input input-bordered w-full bg-blue-300"
        />
        <textarea
          name="description"
          // defaultValue={food.description}
          placeholder="Description"
          className="input input-bordered w-full"
        />
        <input
          type="date"
          name="expireDate"
          defaultValue={food.created_at?.slice(0, 10)}
          className="input input-bordered w-full bg-blue-300"
        />
        <input
          type="text"
          name="image"
          defaultValue={food.image}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
