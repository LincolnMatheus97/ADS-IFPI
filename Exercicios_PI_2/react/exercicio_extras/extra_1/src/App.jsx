import { useState } from 'react'
import './App.css'
import { ProfileList } from './ProfileList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Minha Lista de Perfis</h1>
      <ProfileList />
    </>
  )
}

export default App
