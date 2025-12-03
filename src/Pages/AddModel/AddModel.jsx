


// import { use } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import toast from "react-hot-toast";

// const AddModal = () => {

//   const { user } = use(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       name: e.target.name.value,
//       category: e.target.category.value,
//       description: e.target.description.value,
//       thumbnail: e.target.thumbnail.value,
//       priceMin: Number(e.target.priceMin.value),
//       priceMax: Number(e.target.priceMax.value),
//       created_at: new Date(),
//       downloads: 0,
//       email: user.email  
//     };

//     fetch('https://3d-model-server.vercel.app/foods', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(res => res.json())
//       .then(data => {
//         toast.success("Successfully added!");
//         console.log(data);
//         e.target.reset();
//       })
//       .catch(err => {
//         console.error(err);
//         toast.error("Something went wrong!");
//       });
//   };

//   return (
//     <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
//       <div className="card-body p-6 relative">
//         <h2 className="text-2xl font-bold text-center mb-6">Add New Food</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           {/* Name Field */}
//           <div>
//             <label className="label font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="input w-full rounded-full focus:outline-gray-200"
//               placeholder="Enter name"
//             />
//           </div>

//           {/* Category Dropdown */}
//           <div>
//             <label className="label font-medium">Category</label>
//             <select
//               defaultValue=""
//               name="category"
//               required
//               className="select w-full rounded-full focus:outline-gray-200"
//             >
//               <option value="" disabled>Select category</option>
//               <option value="Vehicles">Vehicles</option>
//               <option value="Plants">Plants</option>
//               <option value="Foods">Foods</option>
//               <option value="Home & Living">Home & Living</option>
//               <option value="Characters">Characters</option>
//               <option value="Space">Space</option>
//               <option value="Animals">Animals</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="label font-medium">Description</label>
//             <textarea
//               name="description"
//               required
//               rows="3"
//               className="textarea w-full rounded-2xl focus:outline-gray-200 h-[250px]"
//               placeholder="Enter description"
//             ></textarea>
//           </div>

//           {/* Thumbnail URL */}
//           <div>
//             <label className="label font-medium">Thumbnail URL</label>
//             <input
//               type="url"
//               name="thumbnail"
//               required
//               className="input w-full rounded-full focus:outline-gray-200"
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>

//           {/* PRICE FIELDS ✔ FIXED */}
//           <div>
//             <label className="label font-medium">Price Min</label>
//             <input
//               type="number"
//               name="priceMin"
//               required
//               className="input w-full rounded-full focus:outline-gray-200"
//               placeholder="Enter minimum price"
//             />
//           </div>

//           <div>
//             <label className="label font-medium">Price Max</label>
//             <input
//               type="number"
//               name="priceMax"
//               required
//               className="input w-full rounded-full focus:outline-gray-200"
//               placeholder="Enter maximum price"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
//           >
//             Add Food
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// };

// export default AddModal;




import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AddModal = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      priceMin: Number(e.target.priceMin.value),
      priceMax: Number(e.target.priceMax.value),
      created_at: new Date(),
      downloads: 0,
      email: user.email,
    };

    fetch("https://3d-model-server.vercel.app/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast.success("Successfully added!");
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-lg mx-auto w-full p-4">
      <div className="card bg-base-100 shadow-2xl rounded-2xl border border-gray-200">
        <div className="card-body p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Food</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input input-bordered w-full rounded-full"
                placeholder="Enter food name"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label font-medium">Category</label>
              <select
                defaultValue=""
                name="category"
                required
                className="select select-bordered w-full rounded-full"
              >
                <option value="" disabled>Select category</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Plants">Plants</option>
                <option value="Foods">Foods</option>
                <option value="Home & Living">Home & Living</option>
                <option value="Characters">Characters</option>
                <option value="Space">Space</option>
                <option value="Animals">Animals</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="4"
                className="textarea textarea-bordered w-full rounded-2xl resize-none"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium">Thumbnail URL</label>
              <input
                type="url"
                name="thumbnail"
                required
                className="input input-bordered w-full rounded-full"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="label font-medium">Price Min</label>
                <input
                  type="number"
                  name="priceMin"
                  required
                  className="input input-bordered w-full rounded-full"
                  placeholder="Enter minimum price"
                />
              </div>
              <div>
                <label className="label font-medium">Price Max</label>
                <input
                  type="number"
                  name="priceMax"
                  required
                  className="input input-bordered w-full rounded-full"
                  placeholder="Enter maximum price"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full mt-6 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-pink-600 hover:to-red-700"
            >
              Add Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
