import React, { useState } from 'react'

const Todo = () => {
    const [text, setText] = useState()
    const [arr, setArr] = useState([])
    const handlebtn = () =>{
        setText('')
        setArr([...arr, {task : text, id: Date.now()}])
    }
    console.log(arr)
    const deletetodo = (id) =>{
        const filter = arr.filter((onetodo)=>{
            return onetodo.id !== id;
        })
        setArr([...filter])
    }
  return (
    <>
      <div className='main-div'>
        <div>
          <figure>
            <figcaption>Add your list here</figcaption>
          </figure>
        </div>
        <div className='add-item'>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='add item' />
          <button onClick={handlebtn}>add item</button>
        </div>
        <div>
            {
             arr.map((item)=>{
                return(
                    <p key={item.id} onClick={()=>deletetodo(item.id)}>{item.task}</p>
             )   
            })
            }
        </div>
      </div>
    </>
  )
}

export default Todo