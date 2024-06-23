import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Maternity from "./pages/Maternity";
import Nature from "./pages/Nature";
import Portrait from "./pages/Portrait";
import Senior from "./pages/Senior";
import Wedding from "./pages/Wedding";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio/maternity" element={<Maternity />} />
      <Route path="/portfolio/nature" element={<Nature />} />
      <Route path="/portfolio/family-portraits" element={<Portrait />} />
      <Route path="/portfolio/senior-and-graduation" element={<Senior />} />
      <Route path="/portfolio/wedding-and-engagement" element={<Wedding />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
  // <>
  //   <Navbar />
  //   <EmblaCarousel />
  //   <AboutCard />
  //   <PortfolioTeaser />
  //   <Footer />;
  // </>;
}

export default App;
