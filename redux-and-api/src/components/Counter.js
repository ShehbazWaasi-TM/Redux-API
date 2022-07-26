import {React,useContext} from 'react'
import {userContext} from "./Usecontext"

const Counter = () => {
    const trackCount = useContext(userContext)
    console.log(trackCount)
    console.log(trackCount.state)
  return (
    <div>
        <h1>{trackCount.state}</h1>
        <button>increment</button>
        <button>decrement</button>
    </div>
  )
}

export default Counter