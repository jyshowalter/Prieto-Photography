import AboutCard from "../components/AboutCard";
import PortfolioTeaser from "../components/PortfolioTeaser";
import { EmblaCarousel } from "../components/EmblaCarousel";

const Homepage = () => {
  return (
    <>
      <EmblaCarousel />
      <AboutCard />
      <PortfolioTeaser />
    </>
  );
};

export default Homepage;
