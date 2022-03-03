import React from 'react'
import {  useNavigate } from 'react-router-dom'
import style from "./Styles.module.css"
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Navbar = () => {
  const navigate =   useNavigate()
  const { logInUser, isLoggedIn} = useContext(AuthContext)

const goToPosts = () => { 
    navigate("/posts")
 }
 const goToUsers = () => { 
    navigate("/users")

  }
  return !isLoggedIn ? <Navigate to='/login' /> : (
    <div className={style.navbar}>
        <h1>Navbar</h1>
        <h2>Username: {logInUser.fname}</h2>
        <div className={style.post}><button onClick={goToPosts}>Create post</button></div>
        <div className={style.post}><button onClick={goToUsers}>Go to users</button></div>
    </div>
  )
}

export default Navbar