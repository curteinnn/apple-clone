import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Mac from "./pages/Mac";
import IPhone from "./pages/iPhone";
import IPad from "./pages/iPad";
import Watch from "./pages/Watch";
import AirPods from "./pages/AirPods";
import Tv from "./pages/Tv-home";
import Entertainment from "./pages/Entertainment";
import Accessories from "./pages/Accessories";
import Support from "./pages/Support";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="pt-11">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/ipad" element={<IPad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/airpods" element={<AirPods />} />
          <Route path="/tv-home" element={<Tv />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}
