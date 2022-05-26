import "../../styles.css";
import { sucursales } from "../../api/datos.jsx";
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
    var lista = obtenerSucursalMasCercana(this.position);
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
// Metodos para obtener la sucursal mas cercana
function obtenerSucursalMasCercana(pos) {
  var listaSucursales = [];
  var crd = pos.coords;
  if (crd === undefined) {
    return null;
  }
  var datos = {
    latitud: crd.latitude,
    longitud: crd.longitude,
  };
  for (var i = 0; i < sucursales.length; i++) {
    if (
      parseInt(
        getKilometros(
          datos.latitud,
          datos.longitud,
          sucursales[i].latitud,
          sucursales[i].longitud
        )
      ) <= 5
    ) {
      listaSucursales.push(sucursales[i]);
    }
  }
  // TODO: Se buscan bien las sucusales, despues hay que ver como mostrarlas
  // Probablemente haya que transformar esto en una clase y asignar la lista como un estado
  return listaSucursales;
}
function getKilometros(lat1, lon1, lat2, lon2) {
  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad(lat2 - lat1);
  var dLong = rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d.toFixed(3); //Retorna tres decimales
}
function rad(x) {
  return (x * Math.PI) / 180;
}
// Fin metodos obtener sucursal mas cercana

export default SectionSucursales;
