import React from 'react'

const DynamicStyling = () => {

  const error = false;

  return (
    <div>
      
        <h1 style={{ color: error ? "red" : "green" }}>Welcome</h1>

    </div>
  )
}

export default DynamicStyling
