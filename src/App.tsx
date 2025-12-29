import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import AirflowHaArchitecturePage from './components/AirflowHaArchitecturePage';
import KedaArchitecturePage from './components/KedaArchitecturePage';
import AzureMigrationPage from "./components/Projects/AzureMigrationPage";
import DatabricksDabPage from "./components/Projects/DatabricksDabPage";
import KubernetesMlPlatformPage from "./components/Projects/KubernetesMlPlatformPage";
import Productivity from "./components/Productivity";


/**
 * Main one-page portfolio layout (current behaviour on "/")
 */
const MainLayout = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  // Scroll tracking (your original logic)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ NEW — Scroll into view when coming from /airflow-ha
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);

      if (target) {
        // Delay ensures DOM is rendered first
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <div className="bg-white">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};


/**
 * App now defines routes:
 *   "/"         -> Main portfolio page
 *   "/airflow-ha" -> Airflow HA architecture page
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/airflow-ha" element={<AirflowHaArchitecturePage />} />
      <Route path="/keda-architecture" element={<KedaArchitecturePage />} />
      <Route path="/azure-migration" element={<AzureMigrationPage />} />
      <Route path="/databricks-dab" element={<DatabricksDabPage />} />
      <Route path="/k8s-ml-platform" element={<KubernetesMlPlatformPage />} />
      <Route path="/productivity" element={<Productivity />} />
    </Routes>
  );
}

export default App;
