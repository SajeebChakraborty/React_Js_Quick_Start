import React, { useState } from 'react'
import User from './User'


const Users = () => {

  const [user,setUser]=useState({

    id:1921484889,
    name: "Sajeeb Cb"

  });


  return (
    <>
      
       <User user={user} /> 

    </>
  )
}

export default Users
