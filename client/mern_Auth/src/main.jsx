import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//step 1 wrap inside BrowserRouter
// import {BrowserRouter as Router} from react-router-dom
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Login from "./components/pages/Login.jsx";
// import Home from "./components/pages/Home.jsx";
// import Register from "./components/pages/Register.jsx";
// import Layout from "./Layout.jsx";

import { BrowserRouter as Router } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<Home />} />
//       <Route path="/register" element={<Register />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
