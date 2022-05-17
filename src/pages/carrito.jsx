import '../styles.css';
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

function Carrito() {
  return (
    <div className="div-carrito">
      <Nav />
      <div className="container">
          <h1>Proximamente!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Carrito;