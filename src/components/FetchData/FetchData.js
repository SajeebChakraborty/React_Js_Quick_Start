import React, { useEffect, useState } from 'react'

export default function FetchData() {

  const [todos,setTodos]=useState(null);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{

        return res.json();

    })
    .then((data)=>{

        setTodos(data);


    });



  })

  return (
    <div>
      



    </div>
  )
}
