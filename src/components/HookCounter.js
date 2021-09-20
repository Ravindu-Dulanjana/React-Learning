import React from 'react'
import { useState } from 'react'

function HookCounter() {

    const initial = 0

    const [count, setCount] = useState(initial)

    const increment = () => setCount(prevState => prevState +1)

  return (
    <div>
       Count : {count}
      <button onClick={increment} >increment  </button>
      <button onClick={() => setCount(prevState => prevState -1)} >decrement</button>
      <button onClick={() => setCount(initial)} >Reset</button>
    </div>
  )
}

export default HookCounter
