import React, { useEffect, useState } from 'react'

export default function UseEffect() {

  const [count,setCount]=useState(0);
  const [isloading,setLoading]=useState(false);

  const onHandleClick=(e)=>{

    setCount(count=>count+1);

  }

  useEffect(()=>{

    console.log("useeffect");

  },[count])

  const onHandleloading=()=>{

    console.log("on loading");


  }


  return (
    <div>
        
        {console.log("rendering")}
        <button onClick={onHandleloading}>isLoaded</button>
        <h1>{ count }</h1>
        <button onClick={onHandleClick}> + </button>

    </div>
  )
}
