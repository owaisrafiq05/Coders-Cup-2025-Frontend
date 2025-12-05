import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SmoothScroll from "./components/GlobalComponents/SmoothScroll";
// import CodersCup from "./pages/CodersCup";
// import Modules from "./pages/Modules";

function App() {
  return (
    <>
      <SmoothScroll />  {/* initialize Lenis once */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/coders-cup" element={<CodersCup />} />
          <Route path="/modules" element={<Modules />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
