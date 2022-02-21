import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import Navbar from "./Navbar";
const Dashboard = () => {
    const {user, isLogin} =  React.useContext(AuthContext);
    
  return (
      <>
      <Navbar />
      <h1 style={{color: "orange"}}>Dashboard</h1>
      {isLogin ? <h2>User: {user}</h2> : <h1>User has not logged in</h1>}
      </>
    
  )
}

export default Dashboard