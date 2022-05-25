import "./App.css";
import Nav from "./components/nav.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import imagen1 from "./assets/banners/auto-mac.jpg";
import imagen2 from "./assets/banners/covid.png";
import imagen3 from "./assets/banners/grand-tasty.jpg";
import './styles.css';

function App() {

  const Carousel = () => {
    return (
      <div
        id="carouselExampleIndicators"
        class="carousel slide m-5"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 " src={imagen1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={imagen2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={imagen3} alt="Third slide" />
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  };
  return (
    <div className="App">
      <Nav />
      <Header />
      {/* 
      TODO: No anda mover las imagenes
      */}
      <Carousel />

      <Footer />
    </div>
  );
}

export default App;
