import React, { useState } from 'react'
import style from './Style.css'

export default function UseStateWithObject() {


  const [user,setUser]=useState({name: "",email: "", password: ""})

  const {name,email,password}=user;


  const onFromSubmit=(e)=>{


    console.log(user)

    e.preventDefault();


  }


  const onHandleChange=(e)=>{


    setUser({...user,[e.target.name] : e.target.value})


  }



  return (
    <div>

        <form action="" onSubmit={onFromSubmit}>

            <h1>Use State with object</h1>

            <div className='textDiv'>

                <label>Name</label>
                <input type="text" onChange={onHandleChange} name="name" value={name}/>

                <label>Email</label>
                <input type="text"  onChange={onHandleChange} value={email} name="email"/>
            


            </div>

                <label>Password</label>
                <input type="password"  onChange={onHandleChange} value={password} name="password"/>
            
            <br/>
            
            <input type="submit"/>



        </form>
        
    </div>
  )
}
