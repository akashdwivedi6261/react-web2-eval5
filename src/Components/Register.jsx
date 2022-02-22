import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

import { AuthContext } from '../Context/AuthContextProvider'

const Register = () => {
  let location =  useLocation()
 let navigate = useNavigate()
//   let base = location.pathname.split("/");
//   console.log(base);
//   let url = "/"+base[1]+"/"+base[2]+"/"+base[3]+"/"+base[4]
  const { RegistrationForm, handleSubmit, handleChange, handleRedirect } = useContext(AuthContext)
  console.log(RegistrationForm.age);
//   useEffect(() => {

//   },)
    return (
        <div>
           {(!RegistrationForm.age && !RegistrationForm.fname && !RegistrationForm.mname)?(<Navigate to="/prereq" />):(<div> <h1>Registration page</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Name: </label>
                    <input type="text" name='name' value={RegistrationForm.name} onChange={handleChange} />
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input type="text" name='email' value={RegistrationForm.email} onChange={handleChange} />
                </div>
                <div>
                    <label for="password">password: </label>
                    <input type="password" name='password' value={RegistrationForm.password} onChange={handleChange} />
                </div>
                <input type="submit" value="Submit" />
            </form> </div>)}
        </div>
    )
}

export default Register