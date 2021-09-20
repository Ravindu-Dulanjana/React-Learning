import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Fetch() {

    const [id, setId] = useState('')
    const [post, setPost] = useState({})
    const [idOnButtonClick, setIdOnButtonClick] = useState('')

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res => {
           console.log(res.data)
           setPost(res.data)
       })

       
    }, [idOnButtonClick])

    const handler = () => {
        setIdOnButtonClick(id)
    }


    return (
        <div>
            <input type="text" onChange={(e) =>setId(e.target.value) } value={id} />
            <button onClick={handler}>Fetching</button>
            <div>
                {post.title}
               {/* {post.map(item => (
                   <li key={item.id}>{item.title}</li>
               ))} */}
            </div>
            
        </div>
    )
}

export default Fetch
