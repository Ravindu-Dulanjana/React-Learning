import React, { useEffect, useState ,useRef } from 'react'

function HookCounterRef() {
    const interval = useRef()
    const [timer, setTimer] = useState(0)


    useEffect(() => {
         interval.current = setInterval(() =>{
            setTimer(prevState => prevState + 1)

        }, 1000
            
        )
        return () => {
             clearInterval(interval.current)
        }
    }, [])

    return (
        <div>
            timer - {timer}
            <button onClick={() => clearInterval(interval.current)}>Stop</button>
        </div>
    )
}

export default HookCounterRef
