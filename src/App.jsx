import Footer from "./components/Footer";
import Header from "./components/Header";

// Node Modules
import { Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projectspage";
import CaseStudy from "./pages/CaseStudy";
import { useEffect } from "react";

// App.jsx
function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ReactLenis root>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </ReactLenis>
  );
}

export default App;