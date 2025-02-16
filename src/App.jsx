import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <span>Counter: {count}</span><br />
      <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={()=> setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  );
}

export default App
