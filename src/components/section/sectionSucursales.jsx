import "../../styles.css";
import { sucursales } from "../../api/datos.jsx";
import { obtenerSucursalMasCercana } from "../../utils/utils.jsx";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

class SectionSucursales extends React.Component {
  constructor() {
    super();
    this.state = {
      listaSucursales: sucursales,
      titulo: "Todas las sucursales",
    };
    this.position = {};
  }
  actualizarSucursales = () => {
    var lista = obtenerSucursalMasCercana(this.position, sucursales);
    this.setState({ listaSucursales: lista, titulo: "Sucusales mas cercanas" });
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.position = position;
    });
  }
  render() {
    var lista = this.state.listaSucursales;
    let mensajeErrorSucursal;
    if (lista === null) {
      lista = sucursales;
      mensajeErrorSucursal = (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>No se encontraron sucursales</strong> No tiene sucursales
          cercanas o no permitio el acceso a la ubicacion.
        </div>
      );
    }
    var content = lista.map((item) => (
      <div key={item.id}>
        <li className="list-group-item">
          {/* TODO: No se muestra el icono */}
          <i className="far fa-map-marked-alt"></i>
          <h4>{item.nombre}</h4>
          <p>{item.direccion}</p>
        </li>
      </div>
    ));
    if (lista == null) {
    }
    return (
      <div className="div-section m-3">
        <section className="py-5">
          <h1>{this.state.titulo}</h1>
          {mensajeErrorSucursal}
          <button
            className="btn btn-outline-dark mb-3"
            style={{ width: "18rem" }}
            onClick={this.actualizarSucursales}
          >
            Obtener sucursal mas cercana
          </button>
          <div className="card">
            <ul className="list-group list-group-flush">{content}</ul>
          </div>
        </section>
      </div>
    );
  }
}


export default SectionSucursales;
