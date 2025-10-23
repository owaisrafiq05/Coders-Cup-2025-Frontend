import EventTimeline from "../components/CodersCupComponents/EventTimeline";
import Navbar from "../components/GlobalComponents/Navbar.tsx";
import Footer from "../components/GlobalComponents/Footer";
import CodersCupHero from "../components/CodersCupComponents/CodersCupHero";
import IntroductionCarousel from "../components/CodersCupComponents/IntroductionCarousel";
import Prizes from "../components/CodersCupComponents/Prizes";

const CodersCup = () => {
  return (
    <div className="bg-[#FEFEEA] caret-transparent overflow-x-clip">
      <Navbar />
      <CodersCupHero />
      <IntroductionCarousel />
      <EventTimeline />
      <Prizes/>
      <Footer />
    </div>
  );
};

export default CodersCup;
