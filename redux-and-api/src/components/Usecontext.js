import {React, createContext, useReducer} from 'react';


const userContext = createContext()

const initialState = 0;

const reducer = (state,action) =>{
    // console.log("state" , state)
    // console.log("action", action)
    if (action.type === "INCREMENT"){
        return state+1;
    }
    if(action.type === "DECREMENT"){
        return state-1;
    }
    if (action.type === "RESET"){
        return 0
    }
}

const Usecontext = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <userContext.Provider value={{state,dispatch}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export {userContext}
export default Usecontext
