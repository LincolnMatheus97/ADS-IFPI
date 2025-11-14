import './App.css'
import { ProfileCard } from './ProfileCard'
import { Contador } from './Contador'

function App() {

  return (
    <>
      <h2>Exercicio 1.1</h2>
      <div>
        <ProfileCard 
        imagemURL='https://cobasiblog.blob.core.windows.net/production-ofc/2020/06/cuidar-de-gato-capa.png' 
        nome='Gatinho Fofo'
        cargo='Gerente Miu-Miu'
        >
        </ProfileCard>
      </div>
    </>
  )
}

export default App
