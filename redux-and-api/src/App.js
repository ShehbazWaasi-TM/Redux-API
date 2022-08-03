import './App.css';
import {React, useState} from "react";
import Fetchapi from './components/Fetchapi';
import Usecontext from './components/Usecontext';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Todoredux from './components/Todoredux';

function App() {
  const [count,setCount] = useState(0)
 
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <Fetchapi/>
      <Usecontext><Counter/></Usecontext>
      <Todo/>
      <Todoredux/>
    </div>
  );
}

export default App;
