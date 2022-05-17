import '../styles.css';
import { Link } from "react-router-dom";
// Esto deberia ser una clase con un estado para poder actualizar el numero del carrito, pero esto queda para mas adelante
function Nav() {
  return (
    <div className="div-nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <Link  to="/" className="navbar-brand" href="#!">McDonals</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><Link  className='nav-link active' to="/">Inicio</Link></li>
                        <li class="nav-item"> <Link  className='nav-link' to="/nosotros">Nosotros</Link></li>
                        <li class="nav-item"> <Link  className='nav-link' to="/locales">Locales</Link></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link  className='dropdown-item' to="/productos">Todos los productos</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link  className='dropdown-item' to="/productos-populares">Productos populares</Link></li>
                                <li><Link  className='dropdown-item' to="/productos-nuevos">Productos nuevos</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <Link  to="/carrito" className="btn btn-outline-dark">
                        <i class="bi-cart-fill me-1"></i>
                        Carrito
                        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Nav;