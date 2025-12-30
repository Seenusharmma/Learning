import React from 'react'
import ControlledInput from './components/ControlledInput'
import UncontrolledComponents from './components/UncontrolledComponents'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <div>
      <ControlledInput />
      <UncontrolledComponents />
      <LoginForm />
    </div>
  )
}

export default App