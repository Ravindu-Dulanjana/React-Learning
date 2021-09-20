import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState ={
    lodding: true,
    error : '',
    post: [],
}

const reducer = (state,action) => { 

    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                lodding:false,
                error:'',
                post:action.payload,
            }
        case 'FETCH_ERROR':
            return{
                lodding:false,
                error:"Something Went Wrong",
                post:{},
            }
        default:
            return state
    }

}




function FetchData() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) =>{
            console.log(res.data)
            dispatch({type:'FETCH_SUCCESS', payload:res.data})
        })
        .catch(error =>{
            dispatch({type:'FETCH_ERROR'})
        }

        )
     }, [])
     

    return (
        <div>
            {state.lodding ? "LOADING" : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default FetchData
