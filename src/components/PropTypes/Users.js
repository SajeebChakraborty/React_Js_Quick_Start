import React, { useState } from 'react'
import User from './User'


const Users = () => {

  const [userName,setUserName]=useState("Sajeeb");
  const [userId,setUserId]=useState("101")

  return (
    <>
      
       <User userName={userName} userId={userId}/> 

    </>
  )
}

export default Users
