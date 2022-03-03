import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from "./Styles.module.css"

const Post = () => {
  const [postDetail, setpostDetail] = useState({})
  let params =  useParams()
    useEffect(() => {
        fetch(`http://localhost:8000/posts/${params.id}`)
        .then((res) => res.json())
        .then( res => setpostDetail(res))
    }, [])
  return (
    <div className={style.login}>
        <h1>Welcome to post page</h1>
        <div>{postDetail.title}</div>
       <div>{postDetail.body}</div>
        <div>{postDetail.authorname}</div>
                
            
        
    </div>
  )
}

export default Post