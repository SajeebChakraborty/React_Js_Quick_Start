import React, { useEffect, useState } from 'react'

export default function FetchData() {

  const [todos,setTodos]=useState(null);
  const [isloading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{

    setTimeout(()=>{

      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res)=>{

          if(!res.ok)
          {

            throw Error("fetching is not successfull");

          }
          else
          {

            return res.json();

          }

      })
      .then((data)=>{

          setTodos(data);
          setLoading(false);
          setError(null);


      })
      .catch((error)=>{

        setError(error.message);
        setLoading(false);


      });


    },2000)


  })

  return (
    <div>
      
      <h1>Fetch data from 'Fake API'</h1>

      {error && error}

      {isloading && <p>it is loading</p>}

      {todos && todos.map((todo)=>{
      
        return <p key={todo.id}>{todo.title}</p>
      
      }
      
      )}




    </div>
  )
}
