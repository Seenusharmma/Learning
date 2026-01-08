import React from 'react'
import Counter from './components/Counter'
import LiveText from './components/LiveText'
import ToggleButton from './components/ToggleButton'

const App = () => {
  return (
    <div>
      <Counter/ > {/* Task 1 */}
      <hr />
      <LiveText /> {/* Task 2 */}
      <ToggleButton /> {/* Task 3 */}
    </div>
  )
}

export default App