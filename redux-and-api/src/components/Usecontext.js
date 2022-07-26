import {React, createContext, useReducer} from 'react';
import Counter from './Counter';

const userContext = createContext()

const initialState = 0 ;

const reducer = (state,action) =>{
    console.log("state" , state)
    console.log("action", action)
    console.log("hello")
    if (action.type === "INCREMENT"){
        return state+1;
    }

}

const Usecontext = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <userContext.Provider value={{state,dispatch}}>
            <Counter/>
        </userContext.Provider>
    </div>
  )
}

export {userContext}
export default Usecontext
