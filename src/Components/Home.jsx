import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
   const navigate =  useNavigate()
  return (
   <>
    <Navbar />
    <h1 style={{color: "orange"}}>welcome to Home Page</h1>
    <button onClick={() => navigate("home/prereq")} style={{padding: "6px"}}>Signup</button>
    </>
  )
}

export default Home