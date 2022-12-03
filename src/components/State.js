//rcc shortcut to create class component
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class State extends Component {

    //rconst shortcut to create constructor
    constructor(props) {
      super(props)
    
      this.state = {
         
        count: 0,
        meg : "Hi",

      }
    }
    
  IncrementCount=()=>{

    this.setState({

        count:this.state.count+1


    })

  }

  DecrementCount=()=>{

    this.setState({


        count:this.state.count-1

    })


  }


  render() {

    //destructng
    const {count}=this.state;




    return (
      <div>

        <p>Count : {count}</p>

        <Button variant='success' onClick={this.IncrementCount}>+</Button>
        <Button variant='danger' style={{ paddingLeft: "50 px", }} onClick={this.DecrementCount} disabled={count<=0 ? true:false}>-</Button>


      </div>
    )
  }
}

export default State
