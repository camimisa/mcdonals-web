import "../../styles.css";
import {
  TraerInfoCarrito,
  ModificarCantidadCarrito,
  EliminarProductoCarrito,
} from "../../utils/utils.jsx";
import React from "react";
import { Link } from "react-router-dom";

class SectionCarrito extends React.Component {
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
              ModificarCantidadCarrito(item.idProducto, 1);
              this.setState((state) => ({
                contador: state.contador + 1,
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
              ModificarCantidadCarrito(item.idProducto, -1);
              this.setState((state) => ({
                contador: state.contador + 1,
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
              EliminarProductoCarrito(item.idProducto);
              this.setState((state) => ({
                contador: state.contador + 1,
              }));
            }}
            className="btn btn-outline-danger btn-sm"
          >
            Eliminar
          </button>
        </td>
      </tr>
    ));
    console.log(objeto);
    return (
      <div className="div-carrito">
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Agregar</th>
                <th scope="col">Restar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {content}
              <tr>
                <td colspan="4">Total</td>
                <td colspan="2">${objeto.total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Link
          to={`/compra`}
          className="btn btn-outline-dark mt-auto"
        >
          Continuar con la compra
        </Link>
      </div>
    );
  }
}

export default SectionCarrito;
