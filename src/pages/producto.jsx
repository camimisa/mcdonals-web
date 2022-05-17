import '../styles.css';
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import ProductoComponente from "../components/product/product.jsx"
function Producto() {
  return (
    <div className="div-producto">
      <Nav />
      <ProductoComponente/>
      <Footer />
    </div>
  );
}

export default Producto;