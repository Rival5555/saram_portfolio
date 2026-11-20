import { Suspense, lazy, useEffect, useState } from 'react';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Experience = lazy(() =>
  import('./pages/Experience').then((m) => ({ default: m.Experience }))
);
const Projects = lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

const getNormalizedPath = (): string => {
  if (typeof window === 'undefined') return '/';
  const rawPath = window.location.pathname;
  return rawPath.replace(/\/+$/, '') || '/';
};

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Saram Zafar — Business Development Executive | AI, Public Service & Communication',
    description:
      'Personal portfolio of Saram Zafar, Business Development Executive and BS Artificial Intelligence student at National Textile University, Faisalabad (2023–2028), combining public service discipline with customer communication.',
  },
  '/about': {
    title: 'About — Saram Zafar | Business Development & Artificial Intelligence',
    description:
      'Background and perspective of Saram Zafar across Artificial Intelligence studies, Pakistan Motorway Police public service, and business development.',
  },
  '/experience': {
    title: 'Experience & Skills — Saram Zafar',
    description:
      'Professional chronology and evidence-based technical and operational competencies of Saram Zafar.',
  },
  '/projects': {
    title: 'Selected Projects — Saram Zafar',
    description:
      'Academic and research Artificial Intelligence project blueprints and technical initiatives by Saram Zafar.',
  },
  '/404': {
    title: '404 Not Found — Saram Zafar',
    description: 'The requested portfolio route could not be found.',
  },
};

function App() {
  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath);

  useEffect(() => {
    const normalizedKey = currentPath === '/index.html' ? '/' : currentPath;
    const meta = ROUTE_META[normalizedKey] ?? ROUTE_META['/404'];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }
  }, [currentPath]);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getNormalizedPath());

      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace(/^#/, '');
        requestAnimationFrame(() => {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (currentPath === '/' || currentPath === '/index.html') {
    return <Home />;
  }

  return (
    <Suspense fallback={null}>
      {currentPath === '/about' ? (
        <About />
      ) : currentPath === '/experience' ? (
        <Experience />
      ) : currentPath === '/projects' ? (
        <Projects />
      ) : (
        <NotFound />
      )}
    </Suspense>
  );
}

export default App;
