import useFetch from './useFetch'

export default function FetchData() {

  const {data,isloading,error}=useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div>
      
      <h1>Fetch data from 'Fake API'</h1>

      {error && error}

      {isloading && <p>it is loading</p>}

      {data && data.map((todo)=>{
      
        return <p key={todo.id}>{todo.title}</p>
      
      }
      
      )}




    </div>
  )
}
