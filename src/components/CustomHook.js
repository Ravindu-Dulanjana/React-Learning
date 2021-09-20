import React, { useState } from 'react'
import useCustom from './Hooks/useCustom'

function CustomHook() {



    const [count, setCount] = useState(0)


    useCustom(count)

    return (
        <div>

            <button onClick={() => setCount(count + 1)}>Click Me{count}</button>
            
        </div>
    )
}

export default CustomHook
