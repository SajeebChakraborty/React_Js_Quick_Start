import React, { Component } from 'react'

export class Change extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      
        onchangeValue: ''


   }
 }

 onchangeHandler=(e)=>{

    this.setState({

        onchangeValue: e.target.value


    },()=>{

        //immediate change
        console.log(this.state.onchangeValue);

    })


 }
 


  render() {
    return (
      <div>

        <input type="text" onChange={this.onchangeHandler}></input>
        <p>{this.state.onchangeValue}</p>
        
      </div>
    )
  }
}

export default Change
