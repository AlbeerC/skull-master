import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Tattoo from "./components/Tattoo/Tattoo";
import Paint from "./components/Paint/Paint";
import Info from "./components/Info/Info";
import Reserve from "./components/Reserve/Reserve";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tattoo />} />
          <Route path="/paints" element={<Paint />} />
          <Route path="/info" element={<Info />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
