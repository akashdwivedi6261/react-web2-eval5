import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { AuthContext } from '../Context/AuthContextProvider'

const Register = () => {
  const { RegistrationForm, handleSubmit, handleChange } = useContext(AuthContext)
    return (
        <div>
            <h1>Registration page</h1>
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
            </form>
        </div>
    )
}

export default Register