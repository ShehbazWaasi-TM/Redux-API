import './App.css';
import {React, useEffect, useState} from "react";

function App() {
  const [count,setCount] = useState(0)
  const [contacts, setContacts] = useState()

    const Data = async()=>{
      const gethata = await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"GET"
      })
      const res = await gethata.json()
      console.log(res)
      setContacts(res)    
    }
  useEffect(()=>{
    Data()
  },[])
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <table border="1px">
        <thead>
          <tr>
            <th>S.no</th>
            <th>name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact)=>{
              return (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.company.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address.street}</td>
                  <td>{contact.website}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
