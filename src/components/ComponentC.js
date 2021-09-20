import React, { useContext } from 'react'
import { channelContext, userContext } from '../App'







function ComponentC() {


    const a = useContext(userContext);
    const b = useContext(channelContext)


    return (
        <div>
            {a} - {b}
        </div>
    )
}

export default ComponentC
