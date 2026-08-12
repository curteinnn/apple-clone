import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-11">
        <Home />
        <Footer />
      </main>
    </>
  );
}
