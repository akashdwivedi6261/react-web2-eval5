import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div style={{background: "olive", height: "120px", marginBottom: "3rem"}}>
      <h1>Navbar</h1>
    <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
        <h2><Link to="/" >Home</Link></h2>
        {/* <h2><Link to="/dashboard" >Dashboard</Link></h2> */}
        <h2><Link to="/login" >Login</Link></h2>
    </div>
      </div>
    
  )
}

export default Navbar