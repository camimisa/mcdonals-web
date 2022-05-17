import '../styles.css';
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import SectionProducts from "../components/section/section.jsx";
function Productos() {
  return (
    <div className="div-productos">
      <Nav />
      <SectionProducts />
      <Footer />
    </div>
  );
}

export default Productos;