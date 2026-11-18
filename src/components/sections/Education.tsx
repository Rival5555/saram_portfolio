import React from 'react';
import { educationData } from '../../data/education';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" aria-label="Education & Academic Path">
      <Container>
        <SectionHeading
          tag="ACADEMIC FOUNDATION"
          titlePrefix="Education &"
          titleHighlight="curriculum."
          metaRight={`${educationData.institution.toUpperCase()} // ${educationData.statusPeriod}`}
        />

        {/* Architectural 12-Column Editorial Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'flex-start',
          }}
        >
          {/* Main Degree Profile */}
          <div className="edu-main-col">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-green)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                STATUS // {educationData.degreeStatus}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {educationData.statusPeriod}
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              {educationData.degree}
            </h3>

            <div
              style={{
                fontSize: '1.125rem',
                color: 'var(--accent-green)',
                fontWeight: 500,
                marginBottom: '1.75rem',
              }}
            >
              {educationData.institution}
              <span
                style={{
                  color: 'var(--text-tertiary)',
                  fontSize: '0.875rem',
                  marginLeft: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 400,
                }}
              >
                — {educationData.location}
              </span>
            </div>

            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '52ch',
                borderLeft: '2px solid var(--border-strong)',
                paddingLeft: '1.25rem',
              }}
            >
              Active undergraduate student pursuing rigorous core concepts in computational
              intelligence. Coursework and laboratory modules are updated as semester milestones are
              certified.
            </p>
          </div>

          {/* Core Areas & Coursework Pillar */}
          <div className="edu-course-col">
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}
            >
              CORE ACADEMIC FOUNDATIONS
            </h4>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {educationData.academicPillars.map((pillar, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    paddingTop: idx === 0 ? '0' : '0.75rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.5,
              }}
            >
              {educationData.note}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
