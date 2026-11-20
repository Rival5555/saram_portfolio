import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" aria-label="About perspective">
      <Container>
        <SectionHeading
          tag="PERSPECTIVE & BACKGROUND"
          titlePrefix="A different"
          titleHighlight="perspective."
          metaRight="INTERSECTING DOMAINS"
        />

        {/* Lead Narrative Grid */}
        <div className="swiss-grid-12 swiss-grid-gap-lg about-narrative-grid">
          <div className="about-lead-col">
            <p className="about-pullquote">{personalInfo.bio.perspectiveIntro}</p>
          </div>

          <div className="about-body-col">
            <div className="about-paragraphs">
              {personalInfo.bio.perspectiveBody.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars: Architectural 3-Column Swiss Grid */}
        <div className="swiss-grid-12 about-pillars-wrapper">
          {personalInfo.bio.pillars.map((pillar) => (
            <div key={pillar.number} className="about-pillar-card">
              <div className="pillar-source">{pillar.source}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-body">{pillar.highlight}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
