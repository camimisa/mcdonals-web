import "../styles.css";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import { TraerInfoCarrito, ModificarCantidadCarrito, EliminarProductoCarrito } from "../utils/utils.jsx";
import React from "react";

class Carrito extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }
  
  render() {
  const objeto = TraerInfoCarrito();
  const content = objeto.listaProductos.map((item) => (
    <tr key={item.idProducto}>
      <td>{item.nombreProducto}</td>
      <td>{item.precio}</td>
      <td>{item.cantidad}</td>

      <td>
        <button
          onClick={() => {
            ModificarCantidadCarrito(item.idProducto, 1)
            this.setState((state) => ({
              contador: state.contador + 1
            }));
          }}
          className="btn btn-outline-primary btn-sm"
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            ModificarCantidadCarrito(item.idProducto, -1)
            this.setState((state) => ({
              contador: state.contador + 1
            }));
          }}
          className="btn btn-outline-primary btn-sm"
        >
          -
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            EliminarProductoCarrito(item.idProducto)
            this.setState((state) => ({
              contador: state.contador + 1
            }));
          }}
          className="btn btn-outline-danger btn-sm"
        >
          Eliminar
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="div-carrito">
      <Nav />
      <div className="container">
        <tbody>{content}</tbody>
      </div>
      <Footer />
    </div>
  )};
}

export default Carrito;
