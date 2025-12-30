import React from 'react'
import { useState } from 'react'

const LiveText = () => {

    const [text, setText] = useState("")

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Live Text: {text}</p>
    </div>
  )
}

export default LiveText
