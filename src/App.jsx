import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Appointment from "./pages/Appointment.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Register from "./pages/Register.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar.jsx";
import { Context } from "./main.jsx";
import axios from "axios";
import Footer from "./components/Footer.jsx";

const App = () => {
  const {isAuthenticated,setIsauthenticated,user,setUser}=useContext(Context)
  useEffect(()=>{
    const fetchUser=async()=>{
      try {
        const response=await axios.get("https://hospital-management-backend-dut4.onrender.com/api/v1/user/patient/me",{withCredentials:true})
        setIsauthenticated(true)
        setUser(response.data.user)
      } catch (error) {
        setIsauthenticated(false)
        setUser({})
      }
    }
    fetchUser()
  },[isAuthenticated])
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </div>
  );
};

export default App;
