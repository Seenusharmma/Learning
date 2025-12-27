import React, { useState } from 'react'

const CounterButton = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Task 2: Button Counter</h1>
        <h2>count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>
            Increase Like👍
        </button>
        {/* Decrease Button  */}
         <button onClick={()=>setCount(count-1)}>
            Increase Like👎
        </button>

    </div>
  )
}

export default CounterButton