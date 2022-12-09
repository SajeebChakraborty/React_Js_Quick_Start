import React, { useState } from 'react'
import style from './Style.css'

export default function Form() {

  const [name,setName]=useState("")

  const[email,setEmail]=useState("")

  const[password,setPassword]=useState("")

  const onNameChange=(e)=>{

    setName(e.target.value);
    console.log(e.target.value)


  };

  const onEmailChange=(e)=>{

    setEmail(e.target.value);
    console.log(e.target.value)


  };

  const onPasswordChange=(e)=>{

    setPassword(e.target.value);
    console.log(e.target.value)


  };

  let objectData={

    name:name, // only name is also right syntax
    email:email, // only email is also right syntax
    password:password // only password is also right syntax



  }



  const onFormSubmit=(e)=>{


    console.log(objectData);
  
    e.preventDefault();



  };




  return (
    <div>

        <h1>Regtration Form</h1>

        <form action="" onSubmit={onFormSubmit}>

            <div className='textDiv'>

                <label>Name</label>
                <input type="text" onChange={onNameChange} value={name}/>

                <label>Email</label>
                <input type="text"  onChange={onEmailChange} value={email}/>
              


            </div>

                <label>Password</label>
                <input type="password"  onChange={onPasswordChange} value={password}/>
              
              <br/>
              
            <input type="submit"/>



        </form>

      
    </div>
  )
}
