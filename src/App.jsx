import Footer from "./components/Footer";
import Header from "./components/Header";

// Node Modules
import { Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import { useEffect } from "react";
import ContactPage from "./pages/Contact";
import WorkPage from "./pages/Work";
import useScrollReveal from "./hooks/useScrollReveal";




// App.jsx
function App() {
  const location = useLocation();
  useScrollReveal();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ReactLenis root>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
      <Footer />
    </ReactLenis>
  );
}

export default App;