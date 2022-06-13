import "../../styles.css";
import { TraerInfoCarrito, GuardarCompra } from "../../utils/utils.jsx";
// import CarritoForm from "../form/SectionForm";
import { useNavigate } from "react-router-dom";
import React from "react";

function SectionCompra() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/formCarrito`; 
    navigate(path);
  }

  // var compra = {
  //   cliente: "prueba",
  //   total: 1000,
  //   fecha: Date.now(),
  //   medioDePago: "Tarjeta de debito",
  // };

  // var compra = carritoForm();
/*
TODO: hacer un form para rellenar estos datos de arriba y que no esten hardcodeados.
*/
  const objeto = TraerInfoCarrito();
  const content = objeto.listaProductos.map((item) => (
    <tr key={item.idProducto}>
      <td>{item.nombreProducto}</td>
      <td>{item.precio}</td>
      <td>{item.cantidad}</td>
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
            </tr>
          </thead>
          <tbody>
            {content}
            <tr>
              <td colspan="2">Total</td>
              <td>${objeto.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={routeChange}
        // onClick={() => {
          
        //   // return(
        //   //   <CarritoForm />
        //   // )
        //   // GuardarCompra(compra);
        //   // alert("TEST: Compra generada");
        // }}
        className="btn btn-outline-dark mt-auto"
      >
        Siguiente
      </button>
    </div>
  );
}

export default SectionCompra;
