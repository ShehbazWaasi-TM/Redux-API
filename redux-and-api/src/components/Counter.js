import {React,useContext} from 'react'
import {userContext} from "./Usecontext"

const Counter = () => {
    const {state,dispatch} = useContext(userContext)
    // console.log("trackcount" ,trackCount)
    console.log(state)
  
  return (
    <div>
        <p>using UseContext and UseReducer</p>
        <h1>{state}</h1>
        <button  onClick={()=>dispatch({type : "INCREMENT"})}>increment</button>
        <button  onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
        <button  onClick={()=>dispatch({type : "RESET"})}>Reset</button>
    </div>
  )
}

export default Counter