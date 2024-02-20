import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LangingPage from './Pages/LangingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LangingPage/>
      <Footer />
    </>
  )
}

export default App
