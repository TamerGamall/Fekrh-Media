
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
// import Projects from './pages/Projects';
import Contact from './pages/Contact';
import OurClients from "./pages/OurClients/OurClients"
import ClientDetails from "./pages/OurClients/ClientDetails"
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/Projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/OurClients" element={<OurClients />} />
          <Route path="/OurClients/:id" element={<ClientDetails />} />
        </Routes>
        <ScrollToTop/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
