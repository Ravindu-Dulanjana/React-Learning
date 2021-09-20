import React, { useContext } from 'react'
import { counterContext } from './App'
import ComponentB from './ComponentB'

function ComponentA(props) {

    const setCounter = useContext(counterContext)

    return (
        <div>
            <h1>{setCounter.countState}</h1>
            <button onClick={() => setCounter.counterDispatch('increment')}>Incerment</button>
            <ComponentB />
        </div>
    )
}

export default ComponentA
