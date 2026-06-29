import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Pricing from "./components/Pricing";
import Gallery from "./components//Gallery";
import Contact from "./components//Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;