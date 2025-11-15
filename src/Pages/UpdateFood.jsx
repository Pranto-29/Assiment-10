
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedFood = {
      foodName: e.target.foodName.value,
      quantity: e.target.quantity.value,
      expireDate: e.target.expireDate.value,
    };

    fetch(`http://localhost:4000/foods/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        Swal.fire("Updated!", "Food updated successfully!", "success");
        navigate("/manage-my-foods");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Food</h2>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          name="foodName"
          defaultValue={food.foodName}
          className="input input-bordered w-full"
        />

        <input
          type="number"
          name="quantity"
          defaultValue={food.quantity}
          className="input input-bordered w-full"
        />

        <input
          type="date"
          name="expireDate"
          defaultValue={food.expireDate}
          className="input input-bordered w-full"
        />

        <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateFood;
