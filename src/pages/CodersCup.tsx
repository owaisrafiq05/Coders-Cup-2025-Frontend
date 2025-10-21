import EventTimeline from "../components/CodersCupComponents/EventTimeline";
import Navbar from "../components/GlobalComponents/Navbar";
import Footer from "../components/GlobalComponents/Footer";
import CodersCupHero from "../components/CodersCupComponents/CodersCupHero";
import IntroductionCarousel from "../components/CodersCupComponents/IntroductionCarousel";

const CodersCup = () => {
  return (
    <div>
      <Navbar />
      <CodersCupHero />
      <IntroductionCarousel />
      <EventTimeline />
      <Footer />
    </div>
  );
};

export default CodersCup;
