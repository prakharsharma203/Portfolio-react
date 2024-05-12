import logo from "./logo.svg";
import "./App.css";
import Footer from "./Compoments/Footer/Footer";
import About from "./Compoments/About/About";
import Projects from "./Compoments/Projects/Projects";
import Contact from "./Compoments/Contact/Contact";
import Home from "./Compoments/Home/Home";
import Header from "./Compoments/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="w-w-11/12 mx-auto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
