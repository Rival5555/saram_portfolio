import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </PageLayout>
  );
};
