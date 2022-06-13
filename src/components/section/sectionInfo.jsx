import "../../styles.css";
import "font-awesome/css/font-awesome.min.css";

function SectionInfo() {
      return (
        <div className="div-product-card" style={{'box-sizing':'revert'}}>
         <div className="col mb-5">
            <div className="card h-100">
            <img
                className="card-img-top"
                src= "https://www.mcdonalds.com.ar/uploads/Header_Desktop_Arcos_Dorados_0c2d69525a.jpg"
                alt="..."
            />
            {/*Info details*/}
            <div className="card-body p-4">
                <div className="text-center">
                {/*Title*/}
                <h5 className="fw-bolder">Contacto</h5>
                {"El teléfono principal de McDonald's Argentina es el 0810-666-1212. Dicho número está disponible para cada una de las sucursales que desee visitar."}
                </div>
            </div>
            {/*Info actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <a target="_blank" className="btn btn-outline-dark mt-auto" href="https://es-la.facebook.com/McDonaldsArgentina/">
                    Facebook
                </a>
                <a target="_blank" className="btn btn-outline-dark mt-2" href="mailto:mcdonals@correo.com">Hace click aqui para mandarnos un email!</a>
                </div>
            </div>
            </div>
        </div>

        </div>
  );
}

export default SectionInfo;
    