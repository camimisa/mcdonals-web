import "../styles.css";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import SectionForm from "../components/section/sectionForm";



function FormCarrito() {
  return (
    <div className="div-nosotros">
      <Nav />

      <h1 className="display-4 text-center mt-3">Formulario</h1>   
      
      <div className="div-section">
          <section className="py-5">
            <SectionForm />
          </section>
      </div>
      <Footer />
    </div>
  );
}

export default FormCarrito;
