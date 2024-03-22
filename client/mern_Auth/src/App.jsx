import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/pages/Login.jsx";
import Home from "./components/pages/Home.jsx";
import Register from "./components/pages/Register.jsx";
import Layout from "./Layout.jsx";
import axios from "axios";
import { UserContextProvider } from "../context/userContext.jsx";
import Dasboard from "./components/pages/Dasboard.jsx";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Layout />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dasboard />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
