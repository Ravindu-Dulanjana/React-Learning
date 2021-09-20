import React, { useContext } from 'react'
import { counterContext } from './App'

function ComponentB(props) {
    const setCounter = useContext(counterContext)
    return (
        <div>
            B -  <h1>{setCounter.countState}</h1>
            <button  onClick={() => setCounter.counterDispatch('increment')}>Incerment</button>
        </div>
    )
}

export default ComponentB
