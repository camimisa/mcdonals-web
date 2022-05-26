import "../../styles.css";
import "font-awesome/css/font-awesome.min.css";

function SectionInfo() {
      return (
        <div className="div-product-card" style={{'box-sizing':'revert'}}>
         <div class="col mb-5">
            <div class="card h-100">
            <img
                class="card-img-top"
                src= "https://www.mcdonalds.com.ar/uploads/Header_Desktop_Arcos_Dorados_0c2d69525a.jpg"
                alt="..."
            />
            {/*Info details*/}
            <div class="card-body p-4">
                <div class="text-center">
                {/*Title*/}
                <h5 class="fw-bolder">Contacto</h5>
                {"El teléfono principal de McDonald's Argentina es el 0810-666-1212. Dicho número está disponible para cada una de las sucursales que desee visitar."}
                </div>
            </div>
            {/*Info actions*/}
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="https://es-la.facebook.com/McDonaldsArgentina/">
                    Facebook
                </a>
                </div>
            </div>
            </div>
        </div>

        </div>
  );
}

export default SectionInfo;
    