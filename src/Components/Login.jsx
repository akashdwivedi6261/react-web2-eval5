import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import style from "./Styles.module.css"
const Login = () => {
   const {formData, handleChange, handleSubmit, isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ? <Navigate to="/users" /> : (
    <div className={style.login}>
        <h1>Welcome to login page</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <h4>Email: <input name="email" value={formData.email} onChange={(e) => handleChange(e)} /></h4>
            <h4>Password:<input name="password" value={formData.password} onChange={(e) => handleChange(e)} /></h4>        
            <h4>Name:<input name="fname" value={formData.fname} onChange={(e) => handleChange(e)} /></h4>        
            <h4> <input type="submit" value="submit" className={style.submit} /></h4> 
        </form>
    </div>
  )
}

export default Login