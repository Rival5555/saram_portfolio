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

function App() {
  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath);

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
