import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItenListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Router } from 'react-router-dom'


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Router>
            <Router path="/" element={ <ItenListContainer />}/>
            <Router path="/category/:categoryId" element={ <ItenListContainer />}/>
            <Router path="/item/:itemId" element={ <ItenListContainer />}/>
            <Router path="+" element={ <h1>Otra Forma || Tienda de Diseño</h1>}/>
          </Router>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App