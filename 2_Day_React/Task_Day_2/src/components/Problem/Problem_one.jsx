import React, { useState } from 'react'

const Problem_one = () => {

    const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>Preview: {input}</p>
    </div>
  )
}

export default Problem_one
