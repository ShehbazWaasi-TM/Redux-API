import React, { useState } from 'react'
import { addTodo , deleteTodo , removeTodo} from '../actions'
import { useDispatch } from "react-redux"

const Todoredux = () => {
    const [inputData, setInputData] = useState()
    const dispatch = useDispatch()
  return (
    <div className='Todo-redux'>
         <h5>Todoredux</h5> 
         <input type="text" placeholder='enter todo' value={inputData} onChange={(e)=>setInputData(e.target.value)} />
         <button onClick={()=>{dispatch(addTodo(inputData))}}>add todo</button>
    </div>
  )
}

export default Todoredux