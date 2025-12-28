import React from 'react'
import ClickExample from './components/ClickExample'
import LoginStatus from './components/LoginStatus'
import UserList from './components/UserList'

const App = () => {
  return (
    <div>
      <h1 className='Main'>Day_2 Learning</h1>
      <ClickExample/>
      <LoginStatus />
      <UserList />
    </div>
  )
}

export default App