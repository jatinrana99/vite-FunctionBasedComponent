import { useState } from "react";
import './App.css'


function App(){
  const[count , setCount] = useState(0)

  
    let handleIncrement = () =>{
        setCount((prev) => prev+1);
    }

    let handleDecrement = () => {
      setCount((prev) => prev-1);
    }

    let handleReset = () => {
      setCount((prev) => prev*0);
    }
    
    return (
      <div className="App">

      <h1>Vite +React Counter</h1>
      <div className="card">
        <h3>
          <code>Count is {count}</code>
        </h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <p className="react-the-docs">
        Made by Jatin Rana
      </p>
    </div>
  )
}

export default App;
  
  