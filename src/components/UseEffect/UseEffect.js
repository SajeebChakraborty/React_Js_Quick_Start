import React, { useEffect, useState } from 'react'

export default function UseEffect() {

  const [count,setCount]=useState(0);

  const onHandleClick=(e)=>{

    setCount(count=>count+1);

  }

  useEffect(()=>{

    console.log("useeffect");

  })


  return (
    <div>
        
        {console.log("rendering")}

        <h1>{ count }</h1>
        <button onClick={onHandleClick}> + </button>

    </div>
  )
}
