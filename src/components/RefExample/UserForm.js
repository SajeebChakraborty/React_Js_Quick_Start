import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
  
    constructor(props) {
      super(props)
      this.userNameRef = createRef(); 
      this.state = {};

      this.state = {
         
      }

    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log(this.userNameRef.current.value);
        this.userNameRef.current.style.backgroundColor = "green";

    }
    
  
    render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>

            <div className='form-field'>

                <label htmlFor='userName'>UserName :</label>
                <input type="text" id='userName' ref={this.userNameRef}></input>

            </div>
            <div className='form-field'>

                <label htmlFor='password'>Password :</label>
                <input type="password" ref={this.userNameRef} id='password'></input>

            </div>
            <button type="submit">Submit</button>


        </form>

      </div>
    )
  }
}
