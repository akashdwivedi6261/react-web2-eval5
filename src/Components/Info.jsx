import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

const Info = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { RegistrationForm, handleSubmit, handleChange, data, setData } = useContext(AuthContext)

  let base = location.pathname.split("/");
  let url = "/" + base[1] + "/" + base[2] + "/" + base[3]
  console.log(base);
  const handleSubmit2 = () => {
    console.log(RegistrationForm);
    let payload = {
      val: RegistrationForm
    }

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(RegistrationForm),
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        console.log("response", response);

        if (RegistrationForm.age && RegistrationForm.fname && RegistrationForm.mname && RegistrationForm.dob) {

          setData([...data, response])
          navigate(`${url}/register`)
        }
      });


  }
  return (
    <>
      <h1>Info</h1>
      <form>
        <div>
          <label>Age</label>
          <input type="text" name="age" placeholder="Enter age" value={RegistrationForm.age} onChange={handleChange} />
        </div>
        <div>
          <label>Father name </label>
          <input type="text" name="fname" placeholder="Enter father name" value={RegistrationForm.fname} onChange={handleChange} />
        </div>
        <div>
          <label> Date of Birth </label>
          <input type="text" name="dob" placeholder="Enter your dob" value={RegistrationForm.dob} onChange={handleChange} />
        </div >
        <div>
          <div>
            <label>Mother name </label>
            <input type="text" name="mname" placeholder="Enter Mother name" value={RegistrationForm.mname} onChange={handleChange} />
          </div>
        </div>
      </form>
      <button onClick={() => handleSubmit2()}>Go to register</button>
    </>

  )
}

export default Info