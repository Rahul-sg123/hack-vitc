// // import React from "react";
// import { motion } from "framer-motion";
// import React, { useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import { animate }  from "animejs";
// import anime from "animejs/lib/anime.es.js";

// const Footer = () => {
//    useEffect(() => {
//   anime({
//     targets: ".square",
//     left: "calc(7.75rem * 2)",
//     borderRadius: 64,
//     backgroundColor: "#F9F640",
//     filter: "blur(5px)",
//     duration: 1500,
//     easing: "easeInOutQuad",
//   });
// }, []);
//   return (
//     <>
//       <span className="flex justify-center items-center bg-gray-200 text-l mt-5 min-h-[250px]">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 w-full max-w-6xl">
//           <div>
//             <span className=" text-2xl font-bold mb-12">SmartPredict</span>
//             <p className="mt-4">
//               JSS Boys Hostel, Vishnuvardhana road, uttarahalli, Kengeri,
//               Bengaluru - 560060
//             </p>
//             <p className="mb-10">Karnataka</p>
//             <div>
//               <span className="font-bold">Contact Us</span>
//               <div className=" w-[200px] h-[1px] bg-black mt-4 mb-4"></div>
//               <div className="flex flex-row space-x-4 mt-2 mb-4">
//                 <a>
//                   <img src="#" />
//                 </a>
//                 <a>
//                   <img src="#" />
//                 </a>
//                 <a>
//                   <img src="#" />
//                 </a>
//                 <a>
//                   <img src="#" />
//                 </a>
//                 <a>
//                   <img src="#" />
//                 </a>
//               </div>
//             </div>
//             <span>Ⓒ 2025 SmartPredict. All rights reserved.</span>
//           </div>
//           <div>
//             <span>SMARTPREDICT</span>
//             <a>About Us</a>
//             <a>Pricing</a>
//             <a>Help & Support</a>
//           </div>
//           <div>
//             <span>SERVICES</span>
//             <a>EV Battery</a>
//             <a>Electric Motor</a>
//             <a>Compressor Pump</a>
//             <a>Server UPS</a>
//             <a>Conveyor</a>
//             <a>Hydraulic System</a>
//             <span>Version 0.0.2</span>
//           </div>
//           <div></div>
//           <div>
//             @SmartPredict | 2025 |
//             <span className="text-yellow-500"> DriveX </span>
//           </div>
//         </div>
//       </span>
//       <div className="large row">
//         <div className="square w-20 h-20 bg-blue-400 absolute"></div>
//       </div>
//     </>
//   );
// };
// export default Footer;


import React, { useState } from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Content */}
      <span className="flex justify-center items-center bg-gray-200 text-l mt-5 min-h-[250px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 w-full max-w-6xl">
          <div>
            <span className="text-2xl font-bold mb-12">SmartPredict</span>
            <p className="mt-4">
              JSS Boys Hostel, Vishnuvardhana road, Uttarahalli, Kengeri,
              Bengaluru - 560060
            </p>
            <p className="mb-10">Karnataka</p>
            <div>
              <span className="font-bold">Contact Us</span>
              <div className="w-[200px] h-[1px] bg-black mt-4 mb-4"></div>
              <div className="flex flex-row space-x-4 mt-2 mb-4">
                <a href="#"><img src="#" alt="social" /></a>
                <a href="#"><img src="#" alt="social" /></a>
                <a href="#"><img src="#" alt="social" /></a>
                <a href="#"><img src="#" alt="social" /></a>
              </div>
            </div>
            <span>Ⓒ 2025 SmartPredict. All rights reserved.</span>
          </div>

          <div>
            <span className="font-bold">SMARTPREDICT</span>
            <div className="flex flex-col space-y-2 mt-2">
              <a href="#">About Us</a>
              <a href="#">Pricing</a>
              <a href="#">Help & Support</a>
            </div>
          </div>

          <div>
            <span className="font-bold">SERVICES</span>
            <div className="flex flex-col space-y-2 mt-2">
              <a href="#">EV Battery</a>
              <a href="#">Electric Motor</a>
              <a href="#">Compressor Pump</a>
              <a href="#">Server UPS</a>
              <a href="#">Conveyor</a>
              <a href="#">Hydraulic System</a>
            </div>
            <span className="block mt-4">Version 0.0.2</span>
          </div>

          <div className="col-span-full text-center mt-4">
            @SmartPredict | 2025 | <span className="text-yellow-500">DriveX</span>
          </div>
        </div>
      </span>
    </>
  );
};

export default Footer;
