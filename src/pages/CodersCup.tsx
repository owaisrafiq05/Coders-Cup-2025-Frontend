import EventTimeline from "../components/CodersCupComponents/EventTimeline";
import Navbar from "../components/GlobalComponents/Navbar.tsx";
import Footer from "../components/GlobalComponents/Footer";
import CodersCupHero from "../components/CodersCupComponents/CodersCupHero";
import IntroductionCarousel from "../components/CodersCupComponents/IntroductionCarousel";
import Prizes from "../components/CodersCupComponents/Prizes";
import CompetitionDetails from "../components/CodersCupComponents/CompetitionDetails";

const CodersCup = () => {
  return (
    <div className="bg-[#FEFEEA] caret-transparent overflow-x-clip">
      <Navbar />
      <CodersCupHero />
      <IntroductionCarousel />
      <EventTimeline />
      <CompetitionDetails />
      <Prizes/>
      <Footer />
    </div>
  );
};

export default CodersCup;
