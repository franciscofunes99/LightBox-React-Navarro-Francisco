import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Contacto } from "./Paginas/Contacto.jsx";
import { ProductosDisp } from "./Paginas/ProductosDispo.jsx";
import { Inicio } from "./Paginas/PagInicio.jsx";
import { CategoriasPro } from "./Paginas/Categorias.jsx";
import { InformacionPro } from "./Paginas/Informacion.jsx";
import "./App.css"



export function App() {


  return (
    <>
      <div className="App">
        <div className="container">
          <NavBar />
          <hr></hr>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="productos" element={<ProductosDisp />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="categoria/:categoria" element={<CategoriasPro />} />
            <Route path="detalle/:id" element={<InformacionPro />} />
            <Route path="/*" element={<Navigate to="products" />} />
          </Routes>
        </div>
      </div>
    </>

  );
}


