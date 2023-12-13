import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Headersect } from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Headersect></Headersect>
    </>
  )
}

export default App
