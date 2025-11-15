

// import { useLoaderData } from "react-router-dom"; // 'react-router-dom' use করতে হবে
// import Banner from "../../components/Banner";
// import { ModelCard } from "../../components/ModelCard";

// const Home = () => {
//     const data = useLoaderData() || []; 
//     console.log(data);

//     return (
//         <div>
//             <Banner />

//             <div className="text-center text-xl font-bold mt-10">Latest Food</div>

//             <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
//                 {data.map(model => <ModelCard key={model._id} model={model} />)}
//             </div>
//         </div>
//     );
// };

// export default Home;

import { useEffect, useState } from "react";
import { ModelCard } from "../../components/ModelCard";
import Banner from "../../components/Banner";

const Home = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/models")
      .then((res) => res.json())
      .then((data) => {
        // Price descending sort
        const sorted = data.sort((a, b) => (b.price_max || 0) - (a.price_max || 0));
        setModels(sorted.slice(0, 6)); // শুধু top 6
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <div className="text-center text-2xl font-bold mt-10">All Food</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-8">
        {models.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default Home;
