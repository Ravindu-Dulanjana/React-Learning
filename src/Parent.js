import React, { Component } from 'react'
import Child from "./Child"

class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parent : 'parent'
      }
    //   this.greeting = this.greeting.bind(this)
    }

    greeting =() => {
        alert(`Hello ${this.state.parent}`)
    }
    

  render() {
    return (
      <div>
       <Child greetingHandler={this.greeting} /> 
      </div>
    )
  }
}

export default Parent
