import Titulo from './components/Titulo/Titulo'
import ComponenteContainer from './components/pages/ComponenteContainer/ComponenteContainer'
import ItemListContainter from './components/ItemListContainer/ItemListContainter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <>
      <NavBar/>
      {/* <Titulo></Titulo> */}
      
      <ComponenteContainer/>
      <ItemListContainter saludito={'saludito :)'}/>
    </>
  )
}

export default App
