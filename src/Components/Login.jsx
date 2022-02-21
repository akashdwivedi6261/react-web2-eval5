import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Login = () => {
       const {loginForm, handleLoginChange, handleFetch} =  useContext(AuthContext);
  
    return (
        <>
        <Navbar />
            <h1>Login Page</h1>
            <form onSubmit={handleFetch}>
                <div>
                    <label>Email:</label>
                    <input placeholder='Enter email address' name='email' value={loginForm.email} onChange={(e) => handleLoginChange(e)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input placeholder='Enter password' type="password" name='password' value={loginForm.password} onChange={(e) => handleLoginChange(e)} />
                </div>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login