// import { use, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { ModelCard } from "../../components/ModelCard";
// const MyModels = () => {
//     const {user} = use(AuthContext)
//     const [models, setModels] = useState([])
//     const [loading, setLoading] = useState(true)

//     useEffect(()=> {

//         fetch(`https://3d-model-server.vercel.app/my-models?email=${user.email}`, {
//             headers: {
//                 authorization: `Bearer ${user.accessToken}`
//             }
//         })
//         .then(res=> res.json())
//         .then(data=> {
            
//             setModels(data)
//             setLoading(false)
//         })

//     }, [user])


//     if(loading) {
//         return <div> Please wait ... Loading...</div>
//     }

//     return (
//         <div>
//               <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
//                      {models.map(model => <ModelCard key={model._id} model={model}/>)}
//                   </div>
            
//         </div>
//     );
// };

// export default MyModels;



import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ModelCard } from "../../components/ModelCard";

const MyModels = () => {
    const { user } = useContext(AuthContext);
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://3d-model-server.vercel.app/my-models?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res => res.json())
        .then(result => {
            setModels(result.data || []);
            setLoading(false);
        })
        .catch(err => {
            console.error("Error fetching my models:", err);
            setModels([]);
            setLoading(false);
        });
    }, [user]);

    if (loading) {
        return <div className="text-center py-10">Please wait ... Loading...</div>;
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {models.length > 0 ? (
                    models.map(model => <ModelCard key={model._id || model.id} model={model} />)
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        You have not uploaded any models yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyModels;
