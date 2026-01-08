import React, { useState } from 'react'

const Counter = () => {
    // React Hooks for storing the temporary data
    const [count, setCount] = useState(0);
    
    
  return (
    <div>
        <h1> Task 1 (Counter Button)</h1>
        <h2>{count}</h2> {/* Value of count */}
        <button onClick={() => setCount(count + 1)}> {/* Increment function  */}
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>Decrement</button> {/* Decrement function  */}

      <button onClick={() => setCount(0)}>Reset</button> {/* Reset function  */}
    </div>
  )
}   

export default Counter