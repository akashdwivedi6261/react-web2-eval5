import React, {createContext, useState} from 'react'

     export const AuthContext =  createContext()
export const AuthContextProvider = ({children}) => {
    const [formData, setFormData] = useState({})
    const [formPosts, setFormPosts] = useState({})
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
   const [isLoggedIn, setisLoggedIn] = useState(false);
   const [logInUser, setLoginUser] = useState({});
    const handleChange = (e) => { 
        const {name, value} = e.target;

        setFormData({...formData, [name]:value})
     }

     const handlePostChange = (e) => { 
        const {name, value} = e.target;

        setFormPosts({...formPosts, [name]:value})
     }

     const handleSubmit = (e) => { 
         e.preventDefault();
        let payload = { 
           username: formData.email,
           password: formData.password,
           fname: formData.fname
          }
          
           fetch("http://localhost:8000/users", {
           method: "POST",
           headers: {
           "Content-Type": "application/json",
           },
           body: JSON.stringify(payload),
           })
           .then(response => response.json())
           .catch(error => console.error('Error:', error))
           .then((response) => {
               if(formData.email !== "" && formData.password !== ""  && formData.fname !== "") {
                setData([...data, response])
                console.log("response", data);
                setLoginUser(response)
                console.log(logInUser);
                setFormData({...formData, email: "", password: "", fname: ""})
                setisLoggedIn(true)
               }
               
           });
      }

      
     const handlePostSubmit = (e) => { 
        console.log("akash");
         console.log("fname", logInUser);
        e.preventDefault();
       let payload = { 
          title: formPosts.title,
          body: formPosts.body,
          authorId: logInUser.id,
          authorName: logInUser.fname
         }
         
          fetch("http://localhost:8000/posts", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          })
          .then(response => response.json())
          .catch(error => console.error('Error:', error))
          .then((response) => {
              console.log(response);
              if(formPosts.title !== "" && formPosts.body !== "") {
               setFormPosts({...formPosts, title: "", body: ""})
              }
              
          });
     }

  return (
    <AuthContext.Provider value={{logInUser,setLoginUser,formData, handleChange, handleSubmit, isLoggedIn, users, setUsers, formPosts, handlePostChange, handlePostSubmit}}>
        {children}
    </AuthContext.Provider>
  )
}

// export default AuthContextProvider