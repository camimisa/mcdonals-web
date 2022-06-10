import "../styles.css";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import {
  TraerInfoCarrito
} from "../utils/utils.jsx";
import React from "react";
import SectionCarrito from "../components/section/sectionCarrito";

function Carrito() {
  const objeto = TraerInfoCarrito();
  const contenidoCarrito = (<SectionCarrito />)
  const carritoVacio = (
    <div>
      <p>Aun no se han agregado productos al carrito</p>
    </div>
  );
    return (
      <div className="div-carrito">
        <Nav />
        <div className="container">
          <div>{objeto != null ? contenidoCarrito : carritoVacio}</div>
        </div>
        <Footer />
      </div>
    );
}


export default Carrito;
