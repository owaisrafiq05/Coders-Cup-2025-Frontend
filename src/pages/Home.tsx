import Footer from "../components/GlobalComponents/Footer";
import Navbar from "../components/GlobalComponents/Navbar.tsx";
import AboutSection from "../components/HomeComponents/About";
import Hero from "../components/HomeComponents/Hero";
import HousesCarousel from "../components/HomeComponents/HousesCarousel";
import Module from "../components/HomeComponents/Module.tsx";
import ModulesSection from "../components/HomeComponents/ModulesSection";
import Sponsors from "../components/HomeComponents/Sponsors";

const Home = () => {


  return (
    <div className="bg-[#FEFEEA] caret-transparent min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <AboutSection />
      <Module />
      <HousesCarousel />
      {/* <Gallery
        images={carouselImages as never[]}
        autoPlayInterval={4000}
      /> */}
      <ModulesSection />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
