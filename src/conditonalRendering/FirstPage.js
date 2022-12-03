import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export class FirstPage extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      
    isLogin:false


   }
 }
 



  render() {

    let element

    if(this.state.isLogin)
    {

        element=<HomePage/>


    }
    else
    {

        element=<LoginPage/>


    }


    return (
      <div>
        
        { element  }


      </div>
    )
  }
}

export default FirstPage
