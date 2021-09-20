import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({FirsrName : '', LastName : ''})


    return (
        <div>
            <form >
                <input type="text" value={name.FirsrName} onChange={e => setName({...name,FirsrName : e.target.value})} />First Name <br/>
                <input type="text" value={name.LastName} onChange={e => setName({...name,LastName:e.target.value})} />Last Name <br/>

                <h2>Your first name : {name.FirsrName}</h2>
                <h2>Your Last Name : {name.LastName}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
