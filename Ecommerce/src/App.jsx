import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'

import Titulo from './components/Titulo/Titulo'
import ComponenteContainer from './components/pages/ComponenteContainer/ComponenteContainer'
import ItemListContainter from './components/ItemListContainer/ItemListContainter'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from  './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  
  let app="Bienvenido!"
 
  return (
      <BrowserRouter className='main'>
      
        <NavBar/> 

        <Titulo titulo={app}/>
          
        <Routes>
            <Route path='/' element={<ItemListContainter greeting={'saludito :)'} /> } />
            <Route path='/category/:id' element={ <ItemListContainter/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/> } />
            <Route path='/cart' element={<CartContainer/> } />
            {/*<Route path='*' element={<Navigate to='/'/>}/>*/}
        </Routes>
          
      </BrowserRouter>
  )
}

export default App
