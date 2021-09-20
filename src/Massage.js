import React, { Component } from 'react'

export default class Massage extends Component {

    constructor(){
        super()
        this.state ={
            massage : 'Welcome Visitors'
        }
    }

    changeMassage(){
        this.setState({
            massage : 'Thank For Your Subcription!'
        })
    }

  render() {
    return (
      <div>
        <h1> {this.state.massage}</h1>
        <button onClick={() => this.changeMassage() }>Subscribe </button>
      </div>
    )
  }
}
