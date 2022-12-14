import React, { useState } from 'react'

export default function Toggle() {

 
  const [toggle,setToggle]=useState(true);

  const onHandleChange=()=>{

    setToggle(!toggle);

  }


  return (
    <div style={{ backgroundColor:"pink" }}>
      

        {toggle &&   <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
}

        <div style={{ textAlign:"center" }}>

            <button onClick={onHandleChange}>{ toggle ? 'Show' : 'Hide' }</button>


        </div>

    </div>

    

  )
}
