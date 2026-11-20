import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { About as AboutSection } from '../components/sections/About';
import { Education } from '../components/sections/Education';
import { Contact } from '../components/sections/Contact';

export const About: React.FC = () => {
  return (
    <PageLayout>
      <div className="subpage-offset">
        <AboutSection />
        <Education />
        <Contact />
      </div>
    </PageLayout>
  );
};
