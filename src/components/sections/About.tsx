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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3.5vw, 3rem)',
            marginBottom: 'clamp(3.5rem, 6vw, 5rem)',
          }}
        >
          <div className="about-lead-col">
            <p
              style={{
                fontSize: 'clamp(1.25rem, 2.1vw, 1.5625rem)',
                lineHeight: 1.45,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                fontWeight: 400,
                borderLeft: '2px solid var(--accent-green)',
                paddingLeft: '1.5rem',
              }}
            >
              {personalInfo.bio.perspectiveIntro}
            </p>
          </div>

          <div className="about-body-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {personalInfo.bio.perspectiveBody.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars: Architectural 3-Column Swiss Grid (No Boxed Cards or Generic Icons) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '2rem',
          }}
        >
          {personalInfo.bio.pillars.map((pillar) => (
            <div key={pillar.number} className="about-pillar-card">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  color: 'var(--accent-green)',
                  letterSpacing: '0.06em',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                {pillar.source}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.875rem',
                  color: 'var(--text-primary)',
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.68,
                  color: 'var(--text-secondary)',
                }}
              >
                {pillar.highlight}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
