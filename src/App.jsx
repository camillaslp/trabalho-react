import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaInicial from "./PaginaInicial";
import Menu from './Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Sobre from "./Sobre";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/" element={
            <header className="App-header">
              <p>E-commerce | Grupo5 | Serratec</p>
                <PaginaInicial />
            </header>} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
