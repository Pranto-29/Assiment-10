import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AddModal = () => {

  const { user } = use(AuthContext)


  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      created_at: new Date(),
      downloads: 0,
      created_by: user.email
    }
    

    fetch('https://3d-model-server.vercel.app/models', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
   
    // fetch('http://localhost:4000/models' {
    //   method :"POST",
    //   headers : {
    //     "content-Type" : "applicaiton/json",
    //   },
    //   body : JSON.stringify(formData)
    // })






    .then(res => res.json())
    .then(data=> {
      toast.success("Successfully added!")
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
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

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
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
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModal;


// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import toast from "react-hot-toast";

// const AddModal = () => {
//   const { user } = useContext(AuthContext); 

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       name: e.target.name.value,
//       category: e.target.category.value,
//       description: e.target.description.value,
//       thumbnail: e.target.thumbnail.value,
//       price: e.target.price.value,       
//       email: user?.email || "unknown",  
//       created_at: new Date(),
//       downloads: 0,
//     };

//     fetch(`http://localhost:4000/models`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         toast.success("Successfully added!");
//         e.target.reset(); // Reset form
//         console.log(data);
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Failed to add model!");
//       });
//   };

//   return (
//     <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
//       <div className="card-body p-6 relative">
//         <h2 className="text-2xl font-bold text-center mb-6">Add New Food</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Field */}
//           <div>
//             <label className="label font-medium text-pink-400">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
//               placeholder="Enter name"
//             />
//           </div>

//           {/* Category Dropdown */}
//           <div>
//             <label className="label font-medium text-pink-400">Category</label>
//             <select
//               defaultValue={""}
//               name="category"
//               required
//               className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
//             >
//               <option value="" disabled>Select category</option>
//               <option value="Vehicles">Vehicles</option>
//               <option value="Plants">Plants</option>
//               <option value="Foods">Foods</option>
//               <option value="Home & Living">Home & Living</option>
//               <option value="Characters">Characters</option>
//               <option value="Space">Space</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Description Textarea */}
//           <div>
//             <label className="label font-medium">Description</label>
//             <textarea
//               name="description"
//               required
//               rows="3"
//               className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
//               placeholder="Enter description"
//             ></textarea>
//           </div>

//           {/* Price Field */}
//           <div>
//             <label className="label font-medium">Price</label>
//             <input
//               type="number"
//               name="price"
//               required
//               className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
//               placeholder="Enter price"
//             />
//           </div>

//           {/* Thumbnail URL */}
//           <div>
//             <label className="label font-medium">Thumbnail URL</label>
//             <input
//               type="url"
//               name="thumbnail"
//               required
//               className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
//               placeholder="https://example.com/image.jpg"
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
