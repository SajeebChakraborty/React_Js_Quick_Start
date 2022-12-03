import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function HookUseState() {

  const [count,setCount]=useState(0)


  const onClickChanger=()=>{

    setCount(count+1);




  }


  return (

    <div>

        <p>Counter : {count}</p>

        <Button onClick={onClickChanger}> + </Button>
      
    </div>
  )
}
