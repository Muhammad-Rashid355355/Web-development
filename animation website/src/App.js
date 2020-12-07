import { useEffect } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import { working } from './components/working'

function App() {
  // working()
  // useEffect(() => {
  //   working()
  // }, [])
  return (
    <div >
      <MainPage />
    </div>
  )
}

export default App
