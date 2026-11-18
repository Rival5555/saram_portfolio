import React, { Suspense, lazy } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Reveal } from '../effects/Reveal';
import { CustomCursor } from '../effects/CustomCursor';

const ConfigurationGuide = import.meta.env.DEV
  ? lazy(() =>
      import('../common/ConfigurationGuide').then((mod) => ({ default: mod.ConfigurationGuide }))
    )
  : null;

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="portfolio-app-root">
      <Reveal />
      <CustomCursor />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      {ConfigurationGuide && (
        <Suspense fallback={null}>
          <ConfigurationGuide />
        </Suspense>
      )}
    </div>
  );
};
