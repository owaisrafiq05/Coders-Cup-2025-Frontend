import Footer from "../components/GlobalComponents/Footer";
import Navbar from "../components/GlobalComponents/Navbar";
import AboutSection from "../components/HomeComponents/About";
import Gallery from "../components/HomeComponents/Gallery";
import Hero from "../components/HomeComponents/Hero";
import HousesCarousel from "../components/HomeComponents/HousesCarousel";
import Module from "../components/HomeComponents/Module";
import ModulesSection from "../components/HomeComponents/ModulesSection";
import Sponsors from "../components/HomeComponents/Sponsors";

const event1 = "event1.jpg";
const event2 = "event2.jpg";
const event3 = "event3.jpg";
const event4 = "event4.jpg";
const event5 = "event5.jpg";
const event6 = "event6.jpg";
const Home = () => {

  const carouselImages = [
      event1, event2, event3, event4, event5, event6
  ];

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
