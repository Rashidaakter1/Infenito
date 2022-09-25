import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Footer from "./pages/Shared/Footer/Footer";
import About from "./pages/Home/About/About";
import Portfolio from "./pages/Home/Portfolio/Portfolio";
import Pricing from "./pages/Home/Pricing/Pricing";
import NavbarBanner from "./pages/Shared/Navbar/NavbarBanner";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main style={{ color: " #09002A" }} className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
