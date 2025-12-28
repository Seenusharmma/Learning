import React from 'react'
import ToggleText from './components/ToggleText'
import ProductList from './components/ProductList'
import ProductDelete from './components/ProductDelete'
import Problem_one from './components/Problem/Problem_one'

const App = () => {
  return (
    <div>
      <ToggleText/>
      <ProductList/>
      <ProductDelete/>

      <Problem_one/>
    </div>
  )
}

export default App