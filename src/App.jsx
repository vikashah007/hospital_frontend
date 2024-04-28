import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Loginpage from "./pages/Loginpage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import { Context } from "./main";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const {isAuthenticated,setIsauthenticated,user,setUser}=useContext(Context)
  useEffect(()=>{
    const fetchUser=async()=>{
      try {
        const response=await axios.get("http://localhost:4000/api/v1/user/patient/me",{withCredentials:true})
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
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
