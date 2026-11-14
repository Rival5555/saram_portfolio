import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Experience as ExperienceSection } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';

export const Experience: React.FC = () => {
  return (
    <PageLayout>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <ExperienceSection />
        <Skills />
        <Contact />
      </div>
    </PageLayout>
  );
};
