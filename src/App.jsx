import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Background from './components/Layout/Background';

// Pages
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import Profiles from './pages/Profiles';
import Resume from './pages/Resume';

function App() {
  const location = useLocation();

  return (
    <>
      <Background />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
