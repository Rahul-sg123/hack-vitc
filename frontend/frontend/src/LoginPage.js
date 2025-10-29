// // LoginPage.js
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function LoginPage() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // your login validation logic here
//     localStorage.setItem("isLoggedIn", "true");
//     navigate("/"); // go back to main/home page after login
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl font-bold mb-4">Login</h1>
//       <button
//         onClick={handleLogin}
//         className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500"
//       >
//         Login
//       </button>
//     </div>
//   );
// }

// export default LoginPage;
