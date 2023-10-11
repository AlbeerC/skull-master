import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Tattoo from "./components/Tattoo/Tattoo";
import Paint from "./components/Paint/Paint";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Landing />
        <Routes>
          <Route path="/" element={<Tattoo />}/>
          <Route path="/paints" element={<Paint />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
