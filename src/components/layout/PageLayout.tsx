import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Reveal } from '../effects/Reveal';
import { CustomCursor } from '../effects/CustomCursor';
import { ConfigurationGuide } from '../common/ConfigurationGuide';

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
      <ConfigurationGuide />
    </div>
  );
};
