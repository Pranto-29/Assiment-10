


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch my foods
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    fetch(`http://localhost:4000/foods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.data || []); // FIXED
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [user]);

  // DELETE function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this food?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/foods/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {   // FIXED
              Swal.fire("Deleted!", "Food has been deleted.", "success");
              setFoods((prev) => prev.filter((item) => item._id !== id));
            }
          })
          .catch((err) => console.error("Delete error:", err));
      }
    });
  };

  if (loading) return <p className="text-center mt-10 text-blue-500">Loading foods...</p>;
  if (foods.length === 0) return <p className="text-center mt-10">No foods added yet.</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">Manage My Foods</h1>

      <table className="table w-full text-pink-400">
        <thead>
          <tr>
            {foods.length > 0 &&
              Object.keys(foods[0]).filter((key) => key !== "_id")
                .map((key) => <th key={key}>{key}</th>)
            }
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {foods.map((food) => (
            <tr key={food._id}>
              {Object.keys(food)
                .filter((key) => key !== "_id")
                .map((key) => (
                  <td key={key}>
                    {key === "expireDate"
                      ? new Date(food[key]).toLocaleDateString()
                      : food[key]}
                  </td>
                ))}

              <td className="flex gap-2 text-pink-400">
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

//     setLoading(true);
//     fetch(`http://localhost:4000/foods?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setFoods(Array.isArray(data.data) ? data.data : []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setFoods([]);
//         setLoading(false);
//       });
//   }, [user]);

//   // DELETE function
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Delete this food?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:4000/foods/${id}`, { method: "DELETE" })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.success) {
//               Swal.fire("Deleted!", "Food has been deleted.", "success");
//               setFoods((prev) => prev.filter((item) => item._id !== id));
//             }
//           })
//           .catch((err) => console.error("Delete error:", err));
//       }
//     });
//   };

//   if (loading) return <p className="text-center mt-10 text-blue-500">Loading foods...</p>;
//   if (foods.length === 0) return <p className="text-center mt-10">No foods added yet.</p>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
//       <h1 className="text-3xl font-bold mb-5 text-center">Manage My Fooded</h1>

//       <table className="table w-full text-pink-400">
//         <thead>
//           <tr>
//             {foods.length > 0 &&
//               Object.keys(foods[0])
//                 .filter((key) => key !== "_id")
//                 .map((key) => <th key={key}>{key}</th>)}
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {foods.map((food) => (
//             <tr key={food._id}>
//               {Object.keys(food)
//                 .filter((key) => key !== "_id")
//                 .map((key) => (
//                   <td key={key}>
//                     {key === "expireDate" ? new Date(food[key]).toLocaleDateString() : food[key]}
//                   </td>
//                 ))}
//               <td className="flex gap-2 text-pink-400">
//                 <Link to={`/update-food/${food._id}`}>
//                   <button className="btn btn-sm btn-info">Update</button>
//                 </Link>
//                 <button onClick={() => handleDelete(food._id)} className="btn btn-sm btn-error">
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
