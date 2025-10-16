import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  // instead of inline for onclicks one can create functions
  const addCount = () => {
    if (counter < 20) setCounter(counter + 1)
  }

  const removeCount = () => {
    if (counter > 0) setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(0)
  }


  return (
    <>
      <h1>React with Natsu</h1>
      <h2>Count Value: {counter}</h2>

      <button
        onClick={addCount}
        // onClick={() => setCounter(counter + 1)}
        disabled={counter >= 20}
      >
        Add Count
      </button>{" "}

      <button
        // onClick={() => setCounter(counter - 1)}
        disabled={counter <= 0}
        onClick={removeCount}
      >
        Remove Count
      </button>{" "}

      <button
        // onClick={() => setCounter(0)}\
        onClick={reset}
      >
        Reset Count
      </button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
