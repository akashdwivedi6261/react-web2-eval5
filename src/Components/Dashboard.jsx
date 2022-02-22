import React from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import Navbar from "./Navbar";
const Dashboard = () => {
    const {user, isLogin, loginForm} =  React.useContext(AuthContext);
    
  return (!loginForm.email && !loginForm.password ) ? <Navigate to="/login" /> : (
      <>
      <Navbar />
      <h1 style={{color: "orange"}}>Dashboard</h1>
       <h2>User: {user}</h2> 
      </>
    
  )
}

export default Dashboard