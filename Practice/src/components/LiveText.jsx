import React, { useState } from 'react'

const LiveText = () => {
    const [text, setText] = useState("")

    
  return (
    <div>
        <h1>Task 2 (Live Text)</h1>
         <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Preview: <strong>{text}</strong>
      </p>
      <hr />
    </div>
  )
}

export default LiveText