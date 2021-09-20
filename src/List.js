import React, { Component } from 'react'
import Person from './Person'

export class List extends Component {

    

    render() {
        const list = [
          {
            id : 1,
            name : 'Bruce',
            age : 29,
            skill : 'React'
          },
          {
            id : 2,
            name : 'Clark',
            age : 30,
            skill : 'Anguler'
          },
          {
            id : 3,
            name : 'Diana',
            age : 300,
            skill : 'Java Script'
          }    
        ]
        const personList = list.map(person => <Person key={person.id} person={person}/>)
    return (
      <div>
        {personList}
      </div>
    )
  }
}

export default List

  

