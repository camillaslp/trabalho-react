import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PaginaInicial from './PaginaInicial'
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>E-commerce | Grupo5 | Serratec</p>
        <PaginaInicial />
      </header>
    </div>
  )
}

export default App
