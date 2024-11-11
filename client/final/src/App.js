import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import CadastroProduto from './pages/CadastroProduto'
import CadastroUsuario from './pages/CadastroUsuario'
import EditarProduto from './pages/EditarProduto'
import NavBarra from './components/NavBarra';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarra />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/usuarios/cadastrar' element={<CadastroUsuario />} />
          <Route path='/produtos/cadastrar' element={<CadastroProduto />} />
          <Route path='/produtos/editar' element={<EditarProduto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
