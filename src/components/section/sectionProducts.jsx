import "../../styles.css";
import ProductCard from "../product-card/productCard.jsx";
import { productos } from "../../api/datos.jsx";

function SectionProducts() {
  var listaProductos;
  switch(window.location.pathname){
    case '/productos/populares': listaProductos = productos.filter(obj => obj.popular === true)
      break;
    case '/productos/nuevos': listaProductos = productos.filter(obj => obj.nuevo === true)
      break;
     default: listaProductos = productos

  }
  const content = listaProductos.map((item) => (
    <div key={item.id}>
      <ProductCard producto = {item}/>
    </div>
  ));
  return (
    <div className="div-section">
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionProducts;
