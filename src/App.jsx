import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />
      <CartWidget itemCount={count} />
      {/* Agrega el contenido principal de tu aplicación aquí */}
    </div>
      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
  </div> */}
      <h1>Proyecto CoderHouse React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
