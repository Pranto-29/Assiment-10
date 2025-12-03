


// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// const ManageMyFoods = () => {
//   const { user } = useContext(AuthContext);
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user?.email) return;

//     fetch(`https://server-client-delta.vercel.app/manage-my-foods?email=${user?.email}`)
//       .then(res => res.json())
//       .then(data => {
//         setFoods(data.data || []);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [user]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Delete this food?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete"
//     }).then(result => {
//       if (result.isConfirmed) {
//         fetch(`https://server-client-delta.vercel.app/foods/${id}`, { method: "DELETE" })
//           .then(res => res.json())
//           .then(() => setFoods(prev => prev.filter(f => f._id !== id)));
//       }
//     });
//   };

//   if (loading) return <p className="text-center mt-10">Loading foods...</p>;
//   if (foods.length === 0) return <p className="text-center mt-10">No foods added yet.</p>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
//       <h1 className="text-3xl font-bold mb-5 text-center">Manage My Foods</h1>
//       <table className="table table-zebra w-full text-center">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Price Min</th>
//             <th>Price Max</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {foods.map(food => (
//             <tr key={food._id}>
//               <td>
//                 <img 
//                   src={food.thumbnail || "https://via.placeholder.com/80"} 
//                   alt={food.name} 
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               </td>
//               <td>{food.name}</td>
//               <td>{food.category}</td>
//               <td>{food.description}</td>

//               {/* FIXED PRICE FIELD */}
//               <td>৳{food.priceMin}</td>
//               <td>৳{food.priceMax}</td>

//               <td className="flex gap-2 justify-center">
//                 <Link to={`/update-food/${food._id}`}>
//                   <button className="btn btn-sm btn-info">Update</button>
//                 </Link>
//                 <button 
//                   onClick={() => handleDelete(food._id)} 
//                   className="btn btn-sm btn-error"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageMyFoods;

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

    fetch(`https://server-client-delta.vercel.app/manage-my-foods?email=${user?.email}`)
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
        fetch(`https://server-client-delta.vercel.app/foods/${id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(() => setFoods(prev => prev.filter(f => f._id !== id)));
      }
    });
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading foods...</p>;

  if (foods.length === 0)
    return <p className="text-center mt-10 text-gray-500">No foods added yet.</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage My Foods</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-center min-w-[700px]">
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
                    className="w-16 h-16 object-cover rounded mx-auto"
                  />
                </td>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td className="line-clamp-2 max-w-xs">{food.description}</td>
                <td>৳{food.priceMin}</td>
                <td>৳{food.priceMax}</td>
                <td className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Link to={`/update-food/${food._id}`}>
                    <button className="btn btn-sm btn-info w-full sm:w-auto">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-sm btn-error w-full sm:w-auto"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;

