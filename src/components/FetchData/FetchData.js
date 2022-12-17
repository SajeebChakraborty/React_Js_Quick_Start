import React, { useEffect, useState } from 'react'

export default function FetchData() {

  const [todos,setTodos]=useState(null);
  const [isloading,setLoading]=useState(true);

  useEffect(()=>{

    setTimeout(()=>{

      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res)=>{

          return res.json();

      })
      .then((data)=>{

          setTodos(data);
          setLoading(false);


      });



    },2000)


  })

  return (
    <div>
      
      <h1>Fetch data from 'Fake API'</h1>

      {isloading && <p>it is loading</p>}

      {todos && todos.map((todo)=>{
      
        return <p key={todo.id}>{todo.title}</p>
      
      }
      
      )}




    </div>
  )
}
