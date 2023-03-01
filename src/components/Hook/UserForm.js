import React, { useRef } from 'react'

export default function UserForm() {

  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {

    event.preventDefault();

    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    console.log(userName);

  }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>

            <div className='form-field'>

                <label htmlFor='userName'>UserName :</label>
                <input type="text" id='userName' ref={userNameRef}></input>

            </div>
            <div className='form-field'>

                <label htmlFor='password'>Password :</label>
                <input type="password" ref={passwordRef} id='password'></input>

            </div>
            <button type="submit">Submit</button>


        </form>


    </div>
  )
}
