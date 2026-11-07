import { useEffect } from 'react';
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

const REVEAL_SELECTORS = [
  '.section-header',
  '.about-lead-col',
  '.about-body-col',
  '.about-pillar-card',
  '.experience-item-row',
  '.edu-main-col',
  '.edu-course-col',
  '.skill-card-col',
  '.project-editorial-card',
  '.contact-main-col',
  '.contact-sidebar-col',
].join(', ');

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS);
    if (targets.length === 0) return;

    document.documentElement.classList.add('reveal-ready');
    targets.forEach((el) => el.classList.add('reveal-item'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);

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
