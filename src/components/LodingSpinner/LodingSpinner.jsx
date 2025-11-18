// import React from "react";
// import { FadeLoader } from "react-spinners";

// const LoadingSpinner = ({ height = "h-screen" }) => {
//   return (
//     <div className={`flex justify-center items-center ${height}`}>
//       <h1 className="text-2xl font-bold sm:text-4xl  lg:text-6xl lg:font-semibold bg-linear-to-br from-[#8a57ff] to-[#b07df6] bg-clip-text text-transparent tracking-widest flex  ">
//         L
//         <span className="mt-3 ml-1.5 -mr-3 sm:hidden">
//           <FadeLoader margin={-8} height={6} width={4} speedMultiplier={1} color="#5f1ef6" />
//         </span>
//         <span className="mt-2.5 ml-1.5 -mr-2.5 hidden sm:block lg:hidden">
//           <FadeLoader margin={-6} height={8} width={5} speedMultiplier={1} color="#5f1ef6" />
//         </span>
//         <span className="mt-0.5 hidden lg:block">
//           <FadeLoader  width={7} speedMultiplier={1} color="#5f1ef6" />
//         </span>
//         ADING
//       </h1>
//     </div>
//   );
// };

// export default LoadingSpinner;

import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = ({ height = "h-screen" }) => {
  return (
    <div className={`flex justify-center items-center ${height}`}>
      <h1 className="text-2xl font-bold sm:text-4xl  lg:text-6xl lg:font-semibold bg-linear-to-br from-[#8a57ff] to-[#b07df6] bg-clip-text text-transparent tracking-widest flex  ">
        L
        <span className="mt-3 ml-1.5 -mr-3 sm:hidden">
          <FadeLoader margin={-8} height={6} width={4} speedMultiplier={1} color="#5f1ef6" />
        </span>
        <span className="mt-2.5 ml-1.5 -mr-2.5 hidden sm:block lg:hidden">
          <FadeLoader margin={-6} height={8} width={5} speedMultiplier={1} color="#5f1ef6" />
        </span>
        <span className="mt-0.5 hidden lg:block">
          <FadeLoader  width={7} speedMultiplier={1} color="#5f1ef6" />
        </span>
        ADING
      </h1>
    </div>
  );
};

export default LoadingSpinner;