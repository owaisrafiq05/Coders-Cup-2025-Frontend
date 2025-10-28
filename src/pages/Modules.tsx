import Navbar from "../components/GlobalComponents/Navbar.tsx";
import Footer from "../components/GlobalComponents/Footer";
import ModulesHero from "../components/ModulesComponents/ModulesHero.tsx";
import ModulesContainer from "../components/ModulesComponents/ModulesContainer.tsx";
import ModulePrizeSection from "../components/ModulesComponents/ModulePrizeSection.tsx";

const Modules = () => {
    return (
        <div className="bg-[#FEFEEA] caret-transparent overflow-x-clip">
            <Navbar />
            <ModulesHero />
            <ModulesContainer/> 
            <ModulePrizeSection/> 
            <Footer />
        </div>
    );
};

export default Modules;
