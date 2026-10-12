import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Amenities />
        <Rooms />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
