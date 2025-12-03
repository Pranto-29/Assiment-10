
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateFood = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [food, setFood] = useState({ name: "", category: "", expireDate: "" });
//   const [loading, setLoading] = useState(true);

//   // Fetch food data on mount
//   useEffect(() => {
//     fetch(`https://3d-model-server.vercel.app/foods/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         const fetchedFood = data?.data || { name: "", category: "", expireDate: "" };
//         // Convert expireDate to YYYY-MM-DD format for input
//         if (fetchedFood.expireDate) {
//           fetchedFood.expireDate = new Date(fetchedFood.expireDate).toISOString().split("T")[0];
//         }
//         setFood(fetchedFood);
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setFood({ name: "", category: "", expireDate: "" });
//       })
//       .finally(() => setLoading(false));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Prepare data for backend, convert expireDate to Date object
//     const updatedFood = {
//       ...food,
//       expireDate: new Date(food.expireDate),
//     };

//     fetch(`https://3d-model-server.vercel.app/foods/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedFood),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           alert("Food updated successfully!");
//           navigate("/manage-my-foods");
//         } else {
//           alert("Update failed! Please try again.");
//         }
//       })
//       .catch(err => {
//         console.error("Update error:", err);
//         alert("Server error! Update failed.");
//       });
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
//           value={food.expireDate || ""}
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
  const [food, setFood] = useState({
    name: "",
    category: "",
    expireDate: "",
    priceMin: "",
    priceMax: "",
    thumbnail: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://3d-model-server.vercel.app/foods/${id}`)
      .then(res => res.json())
      .then(data => {
        const fetched = data?.data || food;
        if (fetched.expireDate) {
          fetched.expireDate = new Date(fetched.expireDate).toISOString().split("T")[0];
        }
        setFood(fetched);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFood = {
      ...food,
      expireDate: new Date(food.expireDate),
      priceMin: Number(food.priceMin),
      priceMax: Number(food.priceMax),
    };

    fetch(`https://3d-model-server.vercel.app/foods/${id}`, {
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
          alert("Update failed!");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Server error! Update failed.");
      });
  };

  if (loading) return <p className="text-center mt-10 text-blue-500">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-5 text-center">Update Food</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          value={food.name}
          onChange={e => setFood({ ...food, name: e.target.value })}
          placeholder="Food Name"
          className="input input-bordered w-full rounded-lg"
          required
        />

        <input
          type="text"
          value={food.category}
          onChange={e => setFood({ ...food, category: e.target.value })}
          placeholder="Category"
          className="input input-bordered w-full rounded-lg"
          required
        />

        <input
          type="url"
          value={food.thumbnail}
          onChange={e => setFood({ ...food, thumbnail: e.target.value })}
          placeholder="Thumbnail URL"
          className="input input-bordered w-full rounded-lg"
          required
        />

        <textarea
          value={food.description}
          onChange={e => setFood({ ...food, description: e.target.value })}
          placeholder="Description"
          className="textarea textarea-bordered w-full rounded-lg h-28"
          required
        />

        <div className="flex gap-2">
          <input
            type="number"
            value={food.priceMin}
            onChange={e => setFood({ ...food, priceMin: e.target.value })}
            placeholder="Price Min"
            className="input input-bordered w-1/2 rounded-lg"
            required
          />
          <input
            type="number"
            value={food.priceMax}
            onChange={e => setFood({ ...food, priceMax: e.target.value })}
            placeholder="Price Max"
            className="input input-bordered w-1/2 rounded-lg"
            required
          />
        </div>

        <input
          type="date"
          value={food.expireDate}
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
