import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Locales from './pages/locales.jsx';
import Carrito from './pages/carrito.jsx';
import ProductosLista from './pages/productosLista';
import Producto from './pages/producto';
import Nosotros from './pages/nosotros.jsx';
import Compra from './pages/compra.jsx';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<App />}></Route>
      <Route path="nosotros" element={<Nosotros />}></Route>
      <Route path="locales" element={<Locales />}></Route>
      <Route path="carrito" element={<Carrito />}></Route>
      <Route path="productos" element={<ProductosLista />}></Route>
      <Route path="productos/populares" element={<ProductosLista />}></Route>
      <Route path="productos/nuevos" element={<ProductosLista />}></Route>
      <Route path="productos/:id" element={<Producto />}></Route>
      <Route path="compra" element={<Compra />}></Route>
      <Route path="*" element={<h1>404</h1>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
