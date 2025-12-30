import React from "react"
import { useRef } from "react"

const UncontrolledComponents = () => {

    const inputRef = useRef();
    
    const handleSubmit = ()=> {
        alert(inputRef.current.value);
    }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledComponents
