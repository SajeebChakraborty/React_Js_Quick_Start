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
      
      <h1>Fetch data from 'Fake API'</h1>
      {todos && todos.map((todo)=>{
      
        return <p key={todo.id}>{todo.title}</p>
      
      }
      
      )}




    </div>
  )
}
