import "../../styles.css";
import { productos } from "../../api/datos.jsx";
import { useParams } from "react-router-dom";
import { agregarProductoCarrito } from "../../utils/utils.jsx";

function Product() {
  function agregar(producto){
    if(agregarProductoCarrito(producto)){
      alert('Se agrego con exito')
    }else{
      alert('No se agrego')
    }
  }
  const { id } = useParams();
  const producto = productos.find((e) => e.id === Number(id));
  return (
    <div className="div-header">
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img mb-5 mb-md-0"
                style={{
                  // fix images so it doesnt look pixeled
                  "margin-left": "3.75rem",
                  width: "75%",
                }}
                src={producto.imagenProducto}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{producto.nombre}</h1>
              <div className="fs-5 mb-5">
                {/* Si aplicamos descuento <span className="text-decoration-line-through">$45.00</span>*/}
                <span>${producto.precio}</span>
              </div>
              <p className="lead">{producto.descripcion}</p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={() => {
                    agregar(producto)
                  }}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}

function agregarAlCarrito(producto) {}

export default Product;
