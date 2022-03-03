import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'
import { useEffect } from 'react';
import style from "./Styles.module.css"
import  Navbar  from "./Navbar";
const Users = () => {
   const {formData, handleChange, handleSubmit, isLoggedIn, users, setUsers, data, setData} = useContext(AuthContext)
   const navigate = useNavigate()
   useEffect(() => {
    fetch("http://localhost:8000/users")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
        console.log("users", response);
        let updatedData = response.filter((item) => item.id !== response.length) 
        setUsers(updatedData)
    console.log("usersdata", users);
    });

   }, [])

   const goToPost = (user) => { 
    navigate(`/users/${user.id}`)
    }
  return !isLoggedIn ? <Navigate to="/login" /> : (
    <div> 
        <Navbar />
        <h1>Welcome to users page</h1>
        {
            users.map((user) => {
                return (<button key={user.id} className={style.user} onClick={() => goToPost(user)}>{user.fname}</button>)
            })
        }
    </div>
  )
}

export default Users