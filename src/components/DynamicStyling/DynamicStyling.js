import React, { useEffect, useState } from 'react'

import style from './Style.css'

const DynamicStyling = () => {

  const [name,setName] = useState("");
  const [validInput,setValidInput] = useState(false);

  useEffect(()=>{

    if(name.length < 2)
    {

        setValidInput(false);

    }
    else
    {

        setValidInput(true);

    }

  },[name])

  const handleChange = (e) => {

    setName(e.target.value);


  }

  return (
    <div>
      
      <input type="text" value = {name} className={  validInput ? "valid" : "invalid" } onChange={handleChange} />

    </div>
  )
}

export default DynamicStyling
