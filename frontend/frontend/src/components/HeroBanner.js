// frontend/src/components/HeroBanner.js
// import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import Nut from "../nutt.png";
import React, { useState } from "react";

const HeroBanner = () => {
  const [moved, setMoved] = useState(false); // track whether it's moved or not
  
    const handleClick = () => {
      anime({
        targets: ".square",
        translateX: moved ? -450 : 450, // move forward or back
        borderRadius: moved ? ["50%", "0%"] : ["0%", "50%"],
      //   backgroundColor: moved ? ["#F9F640", "#3B82F6"] : ["#3B82F6", "#F9F640"],
      rotate: moved? [360, 0] : [0, 360],
        duration: 1200,
        easing: "easeInOutQuad",
      });
  
      setMoved(!moved); // toggle movement
    };
  return (
    <div className="bg-[url('./bg.jpg')] bg-cover bg-center text-white py-16 px-8 text-center relative overflow-hidden min-h-[600px]">
      {/* Background shape/gradient for visual interest, inspired by industrial elements */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-yellow-400 to-slate-800 z-0"></div>
      <div className="absolute inset-0 opacity-5 from-yellow-400 to-slate-800 animate-pulse-slow"></div> {/* Subtle animation */}

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* <motion.h2 
          className="text-5xl md:text-6xl font-black mb-4 leading-tight"
          initial={{ opacity: 0, y: -20}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400">Powering</span> Your Digital Factory
        </motion.h2> */}
        <motion.h2 
          className="text-5xl md:text-6xl font-black mb-10 mt-20 leading-tight cursor-pointer"
          initial={{ opacity: 0, x: -100}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.8 }}
          onClick={handleClick}
        >
          <span className="text-yellow-400">Powering</span> Your Digital Factory
        </motion.h2>

        {/* nut animation  */}
        <div className="relative -top-5 h-4 flex justify-center items-center">
                {/* <div
                  className="square w-20 h-20 bg-blue-400 rounded-md cursor-pointer"
                  onClick={handleClick}
                ></div> */}
                <img src={Nut} alt="nut" className="square w-20 h-20 cursor-pointer" onClick={handleClick}/>
              </div>
        <motion.p 
          className="text-l md:text-2xl text-slate-300 mb-0 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A scalable, AI-driven Universal Predictive Maintenance Platform to monitor diverse industrial machines, predict failures, provide actionable insights, and estimate business impact
        </motion.p>
        {/* <motion.div
          // href="#fleet-overview" // Link to the fleet overview section
          // className="inline-block bg-yellow-400 text-slate-900 font-bold uppercase px-8 py-3 text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/fleet-overview" className="inline-block bg-yellow-400 text-slate-900 font-bold uppercase px-8 py-3 text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg rounded-full">
          Explore Assets
          </Link>
        </motion.div> */}
        {/* <Link
        to="/fleet-overview"
        className="inline-block bg-yellow-400 text-slate-900 font-bold uppercase px-8 py-3 text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg rounded-full"
      >
        Explore Assets
      </Link> */}
      </div>
    </div>
  );
};

export default HeroBanner;