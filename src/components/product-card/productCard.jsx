import "../../styles.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  /*
    Necesitamos:
        - Nombre del item
        - Imagen
        - Precio
        - Descuento: 0 x defecto
        - Pagina a la que tiene que ir si se hace click
    */
  return (
    <div className="div-product-card">
      <div class="col mb-5">
        <div class="card h-100">
          {/*Product image*/}
          <img
            class="card-img-top"
            src={props.producto.imagenCard}
            alt="..."
          />
          {/*Product details*/}
          <div class="card-body p-4">
            <div class="text-center">
              {/*Product name*/}
              <h5 class="fw-bolder"><Link to= {`${props.producto.id}`}>{`${props.producto.nombre}`}</Link></h5>
              {/*Product reviews*
              <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
              </div>/}

              {Product description}
              */
              /*
              {/*Product price*/}
              {props.producto.precio}
            </div>
          </div>
          {/*Product actions*/}
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <a class="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
