import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./components/about/About";
import Car from "./pages/Car/Car";
import More from "./pages/More/More";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/Footer";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import Mega from "./pages/LiMega/Mega";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/navbar";
import Error from "./pages/Error/Error";

function App() {
  const [url, setUrl] = useState("");
  const [white, setWhite] = useState("");

  const GetUrl = () => {
    setUrl(window.location.pathname);
    if (window.location.pathname === "/about") {
      setWhite("white");
    } else {
      setWhite("black");
    }
  };

  useEffect(() => {
    GetUrl();
  });
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home GetUrl={GetUrl} />} />
        <Route path="/about" element={<About GetUrl={GetUrl} />} />
        <Route path="/catalog" element={<Catalog GetUrl={GetUrl} />} />
        <Route path="/cars/:car" element={<Car GetUrl={GetUrl} />} />
        <Route path="/cars/:car/:id" element={<More GetUrl={GetUrl} />} />
        <Route path="/service" element={<Service GetUrl={GetUrl} />} />
        <Route path="/cars/li-auto/mega" element={<Mega GetUrl={GetUrl} />} />
        <Route path="/contact" element={<Contact GetUrl={GetUrl} />} />
        <Route path="/*" element={<Error GetUrl={GetUrl} />} />
      </Routes>

      {url !== "/contact" ? <Footer /> : ""}
    </div>
  );
}

export default App;
