
import './App.css'
import Titulo from './components/Titulo/Titulo'
import ComponenteContainer from './components/pages/ComponenteContainer/ComponenteContainer'
import ItemListContainter from './components/ItemListContainer/ItemListContainter'

function App() {
  

  return (
    <>
      
      <Titulo></Titulo>
      <ComponenteContainer/>
      <ItemListContainter saludito={'saludito :)'}/>
    </>
  )
}

export default App
