import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import About from "./pages/About";
import Formulario from "./pages/Formulario";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia/>} />
          <Route path="/formulario" element={<Formulario/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
