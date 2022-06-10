import "../styles.css";
import { Link } from "react-router-dom";
import React from "react";

// Esto deberia ser una clase con un estado para poder actualizar el numero del carrito, pero esto queda para mas adelante

class NavCarrito extends React.Component {
  constructor() {
    super();
    this.state = {
      cantidad: 0,
    };
  }
  render() {
    return (
      <div className="div-nav-carrito">
        <Link to="/carrito" className="btn btn-outline-dark">
          <i class="bi-cart-fill me-1"></i>
          Carrito
          {/* <span class="badge bg-dark text-white ms-1 rounded-pill">
            {this.state.cantidad}
          </span> */}
        </Link>
      </div>
    );
  }
}

export default NavCarrito;
