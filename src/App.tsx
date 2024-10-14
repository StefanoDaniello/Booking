import { useState } from 'react'
import HeaderComp from './componets/HeaderComp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComp></HeaderComp>
    </>
  )
}

export default App
