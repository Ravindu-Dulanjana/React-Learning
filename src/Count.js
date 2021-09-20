import React, { Component } from 'react'

class Count extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name :this.props.last
         
      }
    }



    incerment(){
        // this.setState({
        //     count : this.state.count +1
        // }, () => {console.log('Callback Value' , this.state.count)})

        this.setState((prevState,props) =>({
            name : prevState.name +" "+ props.last
        }),)

        console.log(this.state.count)
    }
    

  render() {
    return (
      <div>
        <h1>Count - {this.state.name}  - {this.state.last}</h1>
        <button onClick={() => this.incerment()}>Incerment</button>
      </div>
    )
  }
}

export default Count
