import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const changeText = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <>
      <h1>ChloeCounter.exe</h1>
      <button onClick={changeText}>Click Me</button>
      <button onClick={resetCount}>Reset</button>
      <p id="dynamic-text">
        {count === 0 
          ? 'Click the button to start counting how many times Chris said "c...e"!' 
          : `Chris said "c...e" ${count} times!`
        }
      </p>
    </>
  )
}

export default App
