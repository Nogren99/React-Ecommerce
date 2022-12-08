import Titulo from './components/Titulo/Titulo'
import ComponenteContainer from './components/pages/ComponenteContainer/ComponenteContainer'
import ItemListContainter from './components/ItemListContainer/ItemListContainter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
  

 
  return (
      <BrowserRouter>
      
        <NavBar/>
          
        <Routes>
            <Route path='/' element={<ItemListContainter greeting={'saludito :)'} /> } />
            <Route path='/detalle' element={<ItemDetailContainer/> } />
            <Route path='/cart' element={<CartContainer/> } />
            

        </Routes>
          
          
      </BrowserRouter>
  )
}

export default App
