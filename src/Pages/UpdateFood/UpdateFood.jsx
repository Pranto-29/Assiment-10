
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// const UpdateFood = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [food, setFood] = useState(null); // প্রথমে null

//   // Load food data from backend
//   useEffect(() => {
//     fetch(`http://localhost:4000/foods/${id}`)
//       .then((res) => res.json())
//       .then((data) => setFood(data)) // data.data নয়, শুধু data
//       .catch((err) => {
//         console.error(err);
//         Swal.fire("Error", "Failed to load food data", "error");
//       });
//   }, [id]);

//   // Handle form submission
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     if (!food) return;

//     const updatedFood = {
//       title: e.target.foodName.value || food.title,
//       price_min:
//         e.target.priceMin.value !== "" ? Number(e.target.priceMin.value) : food.price_min,
//       price_max:
//         e.target.priceMax.value !== "" ? Number(e.target.priceMax.value) : food.price_max,
//       category: e.target.category.value || food.category,
//       description: e.target.description.value || food.description,
//       created_at: e.target.expireDate.value || food.created_at,
//       image: e.target.image.value || food.image,
//     };

//     fetch(`http://localhost:4000/foods/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedFood),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           Swal.fire("Updated!", "Food updated successfully!", "success");
//           navigate("/manage-my-foods");
//         } else {
//           Swal.fire("Error!", data.message || "Failed to update food", "error");
//         }
//       })
//       .catch(() => Swal.fire("Error!", "Server error", "error"));
//   };

//   // Loading state
//   if (!food) {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-10 bg-pink-400 rounded p-3">
//       <h2 className="text-2xl font-bold mb-4 text-center justify-center items-center hover:bg-emerald-400">Update Food</h2>
//       <form onSubmit={handleUpdate} className="space-y-3">
//         <input
//           type="text"
//           name="foodName"
//           defaultValue={food.title}
//           placeholder="Food Name"
//           className="input input-bordered w-full text-red "
//         />
//         <input
//           type="number"
//           name="priceMin"
//           defaultValue={food.price_min}
//           placeholder="Price Min"
//           className="input input-bordered w-full bg-blue-300"
//         />
//         <input
//           type="number"
//           name="priceMax"
//           defaultValue={food.price_max}
//           placeholder="Price Max"
//           className="input input-bordered w-full"
//         />
//         <input
//           type="text"
//           name="category"
//           defaultValue={food.category}
//           placeholder="Category"
//           className="input input-bordered w-full bg-blue-300"
//         />
//         <textarea
//           name="description"
//           // defaultValue={food.description}
//           placeholder="Description"
//           className="input input-bordered w-full"
//         />
//         <input
//           type="date"
//           name="expireDate"
//           defaultValue={food.created_at?.slice(0, 10)}
//           className="input input-bordered w-full bg-blue-300"
//         />
//         <input
//           type="text"
//           name="image"
//           defaultValue={food.image}
//           placeholder="Image URL"
//           className="input input-bordered w-full"
//         />
//         <button type="submit" className="btn btn-primary w-full">
//           Update Food
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateFood;

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateFood = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [food, setFood] = useState({ name: "", category: "", expireDate: "" });

//   useEffect(() => {
//     fetch(`http://localhost:4000/foods/${id}`)
//       .then(res => res.json())
//       .then(data => setFood(data.data));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:4000/foods/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(food),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.modifiedCount > 0) navigate("/manage-my-foods");
//       });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">Update Food</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input
//           type="text"
//           value={food.name || ""}
//           onChange={e => setFood({ ...food, name: e.target.value })}
//           placeholder="Food Name"
//           required
//         />
//         <input
//           type="text"
//           value={food.category || ""}
//           onChange={e => setFood({ ...food, category: e.target.value })}
//           placeholder="Category"
//           required
//         />
//         <input
//           type="date"
//           value={food.expireDate ? new Date(food.expireDate).toISOString().split("T")[0] : ""}
//           onChange={e => setFood({ ...food, expireDate: e.target.value })}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateFood;


// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const UpdateFood = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [food, setFood] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:4000/foods/${id}`)
//       .then(res => res.json())
//       .then(data => setFood(data.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:4000/foods/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(food)
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire("Updated!", "Food has been updated.", "success");
//           navigate("/manage-my-foods");
//         }
//       })
//       .catch(err => console.error(err));
//   };

//   if (!food) return <p>Loading...</p>;

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-5">Update Food</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input type="text" value={food.name} onChange={e => setFood({...food, name: e.target.value})} placeholder="Name" className="input input-bordered w-full"/>
//         <input type="date" value={food.expireDate.slice(0,10)} onChange={e => setFood({...food, expireDate: e.target.value})} className="input input-bordered w-full"/>
//         <textarea value={food.description} onChange={e => setFood({...food, description: e.target.value})} placeholder="Description" className="textarea textarea-bordered w-full"/>
//         <button type="submit" className="btn btn-primary">Update Food</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateFood;


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateFood = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [food, setFood] = useState({ name: "", category: "", expireDate: "" });
//   const [loading, setLoading] = useState(true);

//   // Fetch food data
//   useEffect(() => {
//     fetch(`http://localhost:4000/foods/${id}`)
//       .then(res => res.json())
//       .then(data => setFood(data?.data || { name: "", category: "", expireDate: "" }))
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setFood({ name: "", category: "", expireDate: "" });
//       })
//       .finally(() => setLoading(false));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:4000/foods/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(food),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           navigate("/manage-my-foods");
//         } else {
//           alert("Update failed!");
//         }
//       })
//       .catch(err => console.error("Update error:", err));
//   };

//   if (loading) return <p className="text-center mt-10 text-blue-500">Loading food data...</p>;

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
//       <h1 className="text-2xl font-bold mb-5 text-center">Update Food</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           value={food.name || ""}
//           onChange={e => setFood({ ...food, name: e.target.value })}
//           placeholder="Food Name"
//           className="input input-bordered w-full rounded-lg"
//           required
//         />
//         <input
//           type="text"
//           value={food.category || ""}
//           onChange={e => setFood({ ...food, category: e.target.value })}
//           placeholder="Category"
//           className="input input-bordered w-full rounded-lg"
//           required
//         />
//         <input
//           type="date"
//           value={food.expireDate ? new Date(food.expireDate).toISOString().split("T")[0] : ""}
//           onChange={e => setFood({ ...food, expireDate: e.target.value })}
//           className="input input-bordered w-full rounded-lg"
//           required
//         />
//         <button type="submit" className="btn btn-primary mt-3 w-full rounded-lg">
//           Update Food
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateFood;


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState({ name: "", category: "", expireDate: "" });
  const [loading, setLoading] = useState(true);

  // Fetch food data on mount
  useEffect(() => {
    fetch(`http://localhost:4000/foods/${id}`)
      .then(res => res.json())
      .then(data => {
        const fetchedFood = data?.data || { name: "", category: "", expireDate: "" };
        // Convert expireDate to YYYY-MM-DD format for input
        if (fetchedFood.expireDate) {
          fetchedFood.expireDate = new Date(fetchedFood.expireDate).toISOString().split("T")[0];
        }
        setFood(fetchedFood);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setFood({ name: "", category: "", expireDate: "" });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for backend, convert expireDate to Date object
    const updatedFood = {
      ...food,
      expireDate: new Date(food.expireDate),
    };

    fetch(`http://localhost:4000/foods/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Food updated successfully!");
          navigate("/manage-my-foods");
        } else {
          alert("Update failed! Please try again.");
        }
      })
      .catch(err => {
        console.error("Update error:", err);
        alert("Server error! Update failed.");
      });
  };

  if (loading) return <p className="text-center mt-10 text-blue-500">Loading food data...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-5 text-center">Update Food</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={food.name || ""}
          onChange={e => setFood({ ...food, name: e.target.value })}
          placeholder="Food Name"
          className="input input-bordered w-full rounded-lg"
          required
        />
        
        <input
          type="text"
          value={food.category || ""}
          onChange={e => setFood({ ...food, category: e.target.value })}
          placeholder="Category"
          className="input input-bordered w-full rounded-lg"
          required
        />
        <input
          type="date"
          value={food.expireDate || ""}
          onChange={e => setFood({ ...food, expireDate: e.target.value })}
          className="input input-bordered w-full rounded-lg"
          required
        />
        <button type="submit" className="btn btn-primary mt-3 w-full rounded-lg">
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
