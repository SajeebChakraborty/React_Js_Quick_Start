import React from 'react'

export default function Child(props) {

  const data="I am a child component";

  props.onChildData(data);

  

  return (
    <div>
        




    </div>
  )
}
