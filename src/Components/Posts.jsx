import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import style from "./Styles.module.css"
import  Navbar  from "./Navbar";

const Posts = () => {
   const {formPosts, handlePostChange, handlePostSubmit, logInUser, isLoggedIn} = useContext(AuthContext)
  return !isLoggedIn ? <Navigate to='/login' /> : (
    <>
      <Navbar />

    <div className={style.login}>
        <h1>Welcome to Post page</h1>
        <form onSubmit={(e) => handlePostSubmit(e)}>
            <h4>Title: <input name="title" value={formPosts.title} onChange={(e) => handlePostChange(e)} /></h4>
            <h4>Body:<input name="body" value={formPosts.body} onChange={(e) => handlePostChange(e)} /></h4>        
            <h4> <input type="submit" value="submit" className={style.submit} /></h4> 
        </form>
    </div>
    </>
  )
}

export default Posts