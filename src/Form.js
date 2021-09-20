import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         email:''
      }
    }

    formHandler = (e) => {
        this.setState({
            email :e.target.value
        })
    }
    

  render() {
    return (
        <form action="">
            <div>
                <label >User Name </label> 
                <input type="text" onChange={this.formHandler} value={this.state.email}/>
            </div>
        </form>
        
      
    )
  }
}

export default Form
