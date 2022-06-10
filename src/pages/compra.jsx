import "../styles.css";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import SectionCompra from "../components/section/sectionCompra";

function Compra() {
  return (
    <div className="div-nosotros">
      <Nav />
      <h1 className="display-3" style={{ textAlign: "center" }}>
        Tu carrito:
      </h1>
      <div className="div-section">
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <SectionCompra />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Compra;
