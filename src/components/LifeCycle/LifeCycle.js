import React, { Component } from 'react'

export default class LifeCycle extends Component {
  
    //first call constructor then render method

    //LIFECYCLE

    //Mounting --> constructor -> render -> componentDidMount(API Call) call
    //Updating --> state/props --> shouldComponetUpdate -> render -> componentDidUpdate
    //Unmounting

    //shortcut rconst to make constructor
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    componentDidMount = () => {



    }

    componentDidUpdate = () => {



    }

    shouldComponentUpdate = () => {

        return true;

    }
    
  
    render() {
    return (
      <div>
        
      </div>
    )
  }
}
