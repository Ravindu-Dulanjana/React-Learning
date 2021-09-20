import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={props.greetingHandler}>Click Me</button>
    </div>
  )
}

export default Child