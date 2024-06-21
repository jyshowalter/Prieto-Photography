import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import AboutCard from "./components/AboutCard";
import PortfolioTeaser from "./components/PortfolioTeaser";
import Footer from "./components/Footer";
import { EmblaCarousel } from "./components/EmblaCarousel";

function App() {
  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <AboutCard />
      <PortfolioTeaser />
      <Footer />
    </>
  );
}

export default App;
