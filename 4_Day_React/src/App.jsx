import React, { useState } from 'react'

const App = () => {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = () => {
    setLogin(true);
  }

  const handleLogout = () => {
    setLogin(false);
  }
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {login ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  )
}

export default App