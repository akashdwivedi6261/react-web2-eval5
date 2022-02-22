import React, { createContext, useEffect } from "react";
import App from "../App";
import { useLocation, useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loginForm, setLoginForm] = React.useState({});
  const [isLogin, setLogin] = React.useState(false)
  const [user, setUser] = React.useState("")
  const [data, setData] = React.useState([]);
    const [isRegister, setIsRegister] = React.useState([]);
    const [RegistrationForm, setRegistrationForm] = React.useState({})
    const navigate = useNavigate()

    // const { handleSubmit} = useContext(AuthContext)
    
    const handleChange = (e) => {
      let{name, value, type, checked} = e.currentTarget;
      console.log(name, value, type, checked);
  
      value = type === "checkbox" ? checked : value;
  
      setRegistrationForm({
        ...RegistrationForm,
        [name]: value
      });
    }
    const handleSubmit = () => {
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
            .then(response => response.json(payload))
            .catch(error => console.error('Error:', error))
            .then((response) => {
                console.log("response", response);
                if (RegistrationForm.name && RegistrationForm.email && RegistrationForm.password) {
                    setData([...data, response])
                    
                }
            });
            if (RegistrationForm.name && RegistrationForm.email && RegistrationForm.password) {
                navigate("/login")
                
            }
            
    }

    useEffect(() => {
        fetch('http://localhost:8000/posts')
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [RegistrationForm])
  // const navigate = useNavigate()

  const handleLoginChange = (e) => {
      const { name, value } = e.target

      setLoginForm({
          ...loginForm, [name]: value
      })

  }

  const handleFetch = (e) => {
      e.preventDefault();
      fetch('http://localhost:8000/posts')
          .then((res) => res.json())
          .then((res) => {
              res.forEach(element => {
                  if(element.email === loginForm.email && element.password === loginForm.password){
                   setUser(element.name)
                      setLogin(true)
                      navigate("/dashboard")
                  }
              });
              
          })
  }
const handleRedirect = () => { 
    console.log("akash");
    // navigate("home/prereq")
 }
  // useEffect(() => {
  //     fetch('http://localhost:8000/posts')
  //         .then((res) => res.json())
  //         .then((res) => {
  //             if(isLogin) {
                  
  //             }
  //         })
  // }, [isLogin])
  return (
    <AuthContext.Provider value={{handleRedirect, isLogin, loginForm, handleLoginChange, handleLoginChange , handleFetch, user, RegistrationForm, handleChange, handleSubmit, data, setData}}>
      {children}
    </AuthContext.Provider>
  );
}
