import '../styles.css';
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import SectionSucursales from '../components/section/sectionSucursales';

function Locales() {
  return (
    <div className="div-locales">
      <Nav />
      <h1 className="display-4 text-center mt-3">Locales</h1>    
      <SectionSucursales/>
      <Footer />
    </div>
  );
}

export default Locales;