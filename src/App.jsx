import './App.css'
import Info from './components/Info'
import Texto from './components/Texto'

function App() {
  return (
    <div>
      <Info quantidade="234" tipo="publicações"/>
      <Info quantidade="4.524" tipo="seguidores"/>
      <Info quantidade="389" tipo="seguindo"/>
      <Texto>Um novo texto como children</Texto>
      <Texto>Um novo textinho como children</Texto>
      <Texto>Um novo texto realmente como children</Texto>
    </div>
  )
}

export default App
