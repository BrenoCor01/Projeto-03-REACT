import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import Produtos from "../src/pages/Produtos";
import Servicos from "../src/pages/Servicos";
import Contatos from "../src/pages/Contatos";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App