import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConfigurationGuide } from './components/ConfigurationGuide';

function App() {
  return (
    <div className="portfolio-app-root">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Dynamic Footer */}
      <Footer />

      {/* Discreet Personalization Guide for the Owner */}
      <ConfigurationGuide />
    </div>
  );
}

export default App;
