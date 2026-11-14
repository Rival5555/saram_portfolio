import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Projects as ProjectsSection } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';

export const Projects: React.FC = () => {
  return (
    <PageLayout>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <ProjectsSection />
        <Contact />
      </div>
    </PageLayout>
  );
};
