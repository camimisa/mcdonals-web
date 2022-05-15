import './App.css';
import Nav from './components/nav/nav.jsx';
import Header from './components/header/header.jsx';
import Section from './components/section/section.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      {/* Yo aca en vez de este section pondria un carousel 
        https://getbootstrap.com/docs/4.0/components/carousel/
        y el section dentro de ver todos los productos
      */}
      <Section />
      <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Mc Donals Web 2022</p></div>
        </footer>
    </div>
  );
}

export default App;
