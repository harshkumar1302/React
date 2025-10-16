import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  return (
    <>
      <h1>React with Natsu</h1>
      <h2>Count Value: {counter}</h2>

      <button
        onClick={() => setCounter(counter + 1)}
        disabled={counter >= 20}
      >
        Add Count
      </button>{" "}

      <button
        onClick={() => setCounter(counter - 1)}
        disabled={counter <= 0}
      >
        Remove Count
      </button>{" "}

      <button
        onClick={() => setCounter(0)}
      >
        Reset Count
      </button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
