import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Loginpage = () => {
  const {isAuthenticated,setIsauthenticated}=useContext(Context)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")

  const navigateTo=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault()
    try {
      const response=await axios.post("https://hospital-management-backend-dut4.onrender.com/api/v1/user/login",{email,password,confirmpassword,role:"Patient"},{
        withCredentials:true,
        headers:{"Content-Type":"application/json"}
      })
      toast.success(response.data.message);
      setIsauthenticated(true);
      navigateTo("/")

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
if(isAuthenticated)
{
  return <Navigate to={"/"} />
}

  return (
    <div className='container form-component login-form'>
      <h2>SignIn</h2>
      <p>Please Login To Continue</p>
      <p>Logged In devices can only take advantage of key feather of this website</p>
      <form onSubmit={handleLogin}>
      <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
      <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
      <input type='text' value={confirmpassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder='ConfirmPassword'/>
      <div style={{gap:"10px", justifyContent:"flex-end", flexDirection:"row"}}>
      <p style={{marginBottom:"0"}}>Not Registered ?</p>
      <Link to={"/register"} style={{textDecoration:"none", alignItems:"center"}}>Register Now</Link>
      </div>
      <div style={{justifyContent:"center", alignItems:"center"}}>
      <button type="submit">Login</button>
      </div>
      </form>
    </div>
  )
}

export default Loginpage
