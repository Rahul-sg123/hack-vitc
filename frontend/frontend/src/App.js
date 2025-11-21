// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BatteryDashboard from "./BatteryDashboard";
import MotorDashboard from "./MotorDashboard";
import PumpDashboard from "./PumpDashboard";
import HydraulicDashboard from "./HydraulicDashboard";
import AdminTicketView from "./AdminTicketView";
import ModelOpsCenter from "./ModelOpsCenter";
import ClusteringInsights from "./ClusteringInsights";
import MotorClusteringPage from "./MotorClusteringPage";
import KalmanFilterPage from "./KalmanFilterPage";
import HeroBanner from "./components/HeroBanner";
import DriftHubPage from "./DriftHubPage"; // Ensure this is imported
import "./App.css";
import loginImg from "./loginimg.jpg";
import Why from "./why.js";
import Footer from "./footer.js";
// import FleetOverview from "./FleetOverview"

// --- Hardcoded fleet data (ID added for React keys) ---
const fleetData = [
  {
    id: "EVB-001",
    type: "EV Battery",
    link: "/machine/battery/EVB-001",
    image: "/images/battery.jpg",
  },
  {
    id: "MOT-007",
    type: "Electric Motor",
    link: "/machine/motor/MOT-007",
    image: "/images/motor.jpg",
  },
  {
    id: "PMP-003",
    type: "Compressor Pump",
    link: "/machine/pump/PMP-003",
    image: "/images/pump.jpg",
  },
  {
    id: "UPS-SRV-2",
    type: "Server UPS",
    link: "/machine/battery/UPS-SRV-2",
    image: "/images/ups.jpg",
  },
  {
    id: "CNV-BELT-A",
    type: "Conveyor",
    link: "/machine/motor/CNV-BELT-A",
    image: "/images/conveyor.jpg",
  },
  {
    id: "HTS-004",
    type: "Hydraulic System",
    link: "/machine/hydraulic/HTS-004",
    image: "/images/hydraulic.jpg",
  },
];

// --- JCB-THEMED FleetOverview component ---
const FleetOverview = () => (
  <>
  <div className="relative overflow-hidden">

  <div className=" absolute inset-0 bg-[url('./bgg.jpg')] bg-cover bg-center"></div>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-none z-0"></div>
  <div id="fleet-overview" className="px-8 py-12 relative z-10 max-w-7xl mx-auto">
    <h1 className="text-5xl font-black text-white mb-2">
      Machine Health Hub
    </h1>
    <p className="text-xl text-white mb-10">
      Unified monitoring for diverse industrial assets.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {fleetData.map((machine, index) => (
        <motion.div
        key={machine.id} // Using the unique ID for the key
          className="bg-white/70 border border-slate-200 rounded-lg shadow-md flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <div className="h-48 bg-slate-70 flex items-center justify-center p-4 border-b-4 border-yellow-400">
            {machine.image && (
              <img
              src={machine.image}
              alt={machine.type}
                className="max-h-full max-w-full object-contain"
              />
            )}
          </div>

          <div className="p-6 flex-grow flex flex-col">
            <h2 className="text-xl font-bold text-slate-900">{machine.type}</h2>
            <div className="flex-grow" />
            <Link
              to={machine.link}
              className="mt-4 bg-yellow-400 text-black font-bold uppercase py-3 rounded-md text-center hover:bg-yellow-500 transition-colors block w-full"
              >
              Analyze
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
      </div>
              </>
);

// --- MAIN App Component ---
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // All navigation links, now including the Drift Hub
  const navLinks = (
    <>
      <Link
        to="/about"
        className="font-bold text-slate-700 hover:text-yellow-500 transition-colors"
      >
        About
      </Link>
      <div className="group relative">
        <button className="font-bold text-slate-700 hover:text-yellow-500 transition-colors inline-flex items-center">
          <span>Features</span>
          <svg
            className="fill-current h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="absolute hidden text-slate-700 pt-1 group-hover:block w-48 bg-white border border-slate-200 rounded-md shadow-lg z-20">
          <li>
            <Link
              to="/model-ops"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Model Ops
            </Link>
          </li>
          <li>
            <Link
              to="/admin/tickets"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Ticket Admin
            </Link>
          </li>
          <li>
            <Link
              to="/kalman-filter"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Noise Filter
            </Link>
          </li>
          {/* <li>
            <Link
              to="/clustering-insights/motor"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Motors
            </Link>
          </li> */}
        </ul>
      </div>

      {/* --- ADDED THIS LINK --- */}
      {/* <Link to="/drift-hub" className="font-bold text-slate-700 hover:text-yellow-500 transition-colors">Drift Hub</Link> */}
      <div className="group relative">
        <button className="font-bold text-slate-700 hover:text-yellow-500 transition-colors inline-flex items-center">
          <span>Clustering Insights</span>
          <svg
            className="fill-current h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="absolute hidden text-slate-700 pt-1 group-hover:block w-48 bg-white border border-slate-200 rounded-md shadow-lg z-20">
          <li>
            <Link
              to="/clustering-insights/battery"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Batteries
            </Link>
          </li>
          <li>
            <Link
              to="/clustering-insights/motor"
              className="block px-4 py-2 hover:bg-slate-100"
            >
              Motors
            </Link>
          </li>
        </ul>
      </div>

      <Link
        to="/admin/tickets"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-slate-700 hover:bg-gray-300 transition-colors"
      >
        <img src={loginImg} alt="login" className="w-20 h-20 object-contain" />
      </Link>
    </>
  );

  return (
    <Router>
      <div className="App">
        <header className="bg-white border-b border-slate-200 p-2 sticky top-0 z-50 shadow-md">
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="text-3xl font-black text-slate-900">
              Smart<span className="text-yellow-500">Predict</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8 bg-transparent">
              {navLinks}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
            >
              <nav className="flex flex-col items-center space-y-4 p-4">
                {navLinks}
              </nav>
            </motion.div>
          )}
        </header>

        <main>
          {/* kjabfyua */}

          {/* <FleetOverview /> */}

          {/* khbshdbifba siu  */}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroBanner />
                  {/* <FleetOverview /> */}
                  <Why />
                  {/* <Footer/> */}
                </>
              }
            />

            <Route path="/fleet-overview" element={<FleetOverview />} />
            <Route path="/machine/battery/:id" element={<BatteryDashboard />} />
            <Route path="/machine/motor/:id" element={<MotorDashboard />} />
            <Route path="/machine/pump/:id" element={<PumpDashboard />} />
            <Route
              path="/machine/hydraulic/:id"
              element={<HydraulicDashboard />}
            />
            <Route path="/admin/tickets" element={<AdminTicketView />} />
            <Route path="/model-ops" element={<ModelOpsCenter />} />
            <Route
              path="/clustering-insights/battery"
              element={<ClusteringInsights />}
            />
            <Route
              path="/clustering-insights/motor"
              element={<MotorClusteringPage />}
            />
            <Route path="/kalman-filter" element={<KalmanFilterPage />} />
            {/* --- ADDED THIS ROUTE --- */}
            <Route path="/drift-hub" element={<DriftHubPage />} />
          </Routes>
        </main>
        {/* <motion.h2
          className="text-5xl md:text-6xl font-black mb-4 leading-tight"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-400">Powering</span> Your Digital Factory
        </motion.h2> */}
        {/* <motion.div
          // to="/fleet-overview" // Link to the fleet overview section
          // className="inline-block bg-yellow-400 text-slate-900 font-bold uppercase px-8 py-3 text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/fleet-overview" className="inline-block bg-yellow-400 text-slate-900 font-bold uppercase px-8 py-3 text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg rounded-full">
            Explore Assets
          </Link>
        </motion.div> */}
        <motion.div
          // href="#fleet-overview" // Link to the fleet overview section
          // className="inline-block bg-yellow-400 text-slate-900 font-bold uppercase px-8 py-3 text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/fleet-overview"
            className="inline-block bg-yellow-400 text-slate-900 font-bold uppercase px-8 py-3 text-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg rounded-full"
          >
            Explore Assets
          </Link>
        </motion.div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
