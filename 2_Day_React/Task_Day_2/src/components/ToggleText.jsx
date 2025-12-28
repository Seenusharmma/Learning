import React, { useState } from 'react'

const ToggleText = () => {

    const  [show, setShow] = useState(false);
  return (
    <div>

      <button onClick={() => setShow(!show)}>
        {show ? "Hello Intern" : "Nothing"}
      </button>
    </div>
  )
}

export default ToggleText
