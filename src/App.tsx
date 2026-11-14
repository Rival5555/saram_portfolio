import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { NotFound } from './pages/NotFound';

function App() {
  const rawPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const normalizedPath = rawPath.replace(/\/+$/, '') || '/';

  switch (normalizedPath) {
    case '/':
    case '/index.html':
      return <Home />;
    case '/about':
      return <About />;
    case '/experience':
      return <Experience />;
    case '/projects':
      return <Projects />;
    default:
      return <NotFound />;
  }
}

export default App;
