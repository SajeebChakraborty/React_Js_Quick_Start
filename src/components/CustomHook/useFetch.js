import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data,setData]=useState(null);
    const [isloading,setLoading]=useState(true);
    const [error,setError]=useState(null);
  
    useEffect(()=>{
  
      setTimeout(()=>{
  
        fetch(url)
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
  
            setData(data);
            setLoading(false);
            setError(null);
  
  
        })
        .catch((error)=>{
  
          setError(error.message);
          setLoading(false);
  
  
        });
  
  
      },2000)
  
  
    })
    return {data,isloading,error};

}
