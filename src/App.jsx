import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaInicial from "./PaginaInicial";
import Menu from './Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Carrinho from "./Carrinho";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/" element={
            <PaginaInicial />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
