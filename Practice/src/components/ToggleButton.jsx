import React, { useState } from 'react'

const ToggleButton = () => {

    const [button, setButton] = useState(false)

  return (
    <div>
        <h1>Task 3 (Toggle Button)</h1>
        <h2>Status: {button ? "ON" : "OFF"}</h2> 
        <button
        onClick={() => setButton(!button)}>
            {button ? "Turn Off" : "Turn On"}
        </button>
        <hr />
    </div>
  )
}

export default ToggleButton