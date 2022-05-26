import '../styles.css';
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import SectionInfo from '../components/section/sectionInfo';

function Nosotros() {
  
  return (    
    <div className="div-nosotros">
      <Nav />(
      <h1 className="display-3" style={{textAlign: 'center'}}>Nosotros</h1>
      <div className="div-section">
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left">
              <SectionInfo/>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Nosotros;