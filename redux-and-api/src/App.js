import './App.css';
import {React, useState} from "react";
import Fetchapi from './components/Fetchapi';

function App() {
  const [count,setCount] = useState(0)
 
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <Fetchapi/>
    </div>
  );
}

export default App;
