import "../../styles.css";
import { productos } from "../../api/datos.jsx";
import { useParams } from "react-router-dom";
function Product() {
  /*
    Necesitamos:
        - Nombre del item
        - Imagen
        - Precio
        - Descuento: 0 x defecto
        - Descripcion
        - [Mas adelante] informacion nutricional
        - [Mas adelante] ingredientes
    */
  const { id } = useParams();
  const producto = productos.find((e) => e.id === Number(id));
  return (
    <div className="div-header">
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={producto.imagenProducto}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{producto.nombre}</h1>
              <div className="fs-5 mb-5">
                {/* Si aplicamos descuento <span className="text-decoration-line-through">$45.00</span>*/}
                <span>{producto.precio}</span>
              </div>
              <p className="lead">{producto.descripcion}</p>
              <div className="d-flex">
                {/* No me dejo poner esto dentro del input style="max-width: 3rem" */}
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
