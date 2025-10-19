import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SmoothScroll from "./components/GlobalComponents/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll />  {/* initialize Lenis once */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
