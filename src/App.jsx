import Header  from "./components/header/Header";
import About from "./components/about/About"
import { Nav } from "./components/nav/Nav";
import Proyects from "./components/proyects/Proyects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <>
   <Header/>
   <Nav/>
   <Proyects/>
   <About/>
   
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
