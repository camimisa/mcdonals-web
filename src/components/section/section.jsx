import "../../styles.css";
import ProductCard from "../product-card/productCard.jsx";
import { productos } from "../../api/datos.jsx";

function Section() {
  const content = productos.map((item) => (
    <div key={item.id}>
      <ProductCard producto = {item}/>
    </div>
  ));
  return (
    <div className="div-section">
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
