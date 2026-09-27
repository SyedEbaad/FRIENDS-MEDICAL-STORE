import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Medicines from "./components/Medicines";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import DeliveryBanner from "./components/DeliveryBanner";
import Location from "./components/Location";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Medicines />
        <Services />
        <Gallery />
        <DeliveryBanner />
        <Location />
      </main>
      <Footer />
    </>
  );
}
