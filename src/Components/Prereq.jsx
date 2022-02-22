import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import Navbar from './Navbar'

const Prereq = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { RegistrationForm, handleSubmit, handleChange } = React.useContext(AuthContext)
  
  // let base = location.pathname.split("/");
  // let url = "/" + base[1] + "/" + base[2]

  let handleNav = () => {
    if(RegistrationForm.laptop && RegistrationForm.present) {
      navigate(`/info`)
    }
  }
  return (
    <div>
      
        <Navbar />

      <h1>Prerequisties</h1>
      <div>
        <div>
          <input type="checkbox" name="present" value={RegistrationForm.present} onChange={handleChange} />
          <label>Can you attend 90% of the classes?</label>
        </div>
        <div>
          <input type="checkbox" name="laptop" value={RegistrationForm.laptop} onChange={handleChange} />
          <label>Do you have a laptop?</label>
        </div>
      </div>
      <button onClick={() => handleNav()}>Continue</button>
    </div>
  )
}

export default Prereq