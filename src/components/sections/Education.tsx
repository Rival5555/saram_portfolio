import React from 'react';
import { GraduationCap, BookOpen, AlertCircle } from 'lucide-react';
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
        />

        {/* Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3.5vw, 3rem)',
            alignItems: 'flex-start',
          }}
        >
          {/* Main Degree Profile */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              padding: 'clamp(1.75rem, 4vw, 3rem)',
            }}
            className="edu-main-col"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-green)',
                  backgroundColor: 'var(--accent-green-light)',
                  border: '1px solid var(--accent-green-border)',
                  padding: '0.3rem 0.65rem',
                }}
              >
                <GraduationCap size={15} />
                <span>{educationData.degreeStatus}</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {educationData.statusPeriod}
              </div>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              {educationData.degree}
            </h3>

            <div
              style={{
                fontSize: '1.1875rem',
                color: 'var(--accent-green)',
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              {educationData.institution}
              <span
                style={{
                  color: 'var(--text-tertiary)',
                  fontSize: '0.9375rem',
                  marginLeft: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                // {educationData.location}
              </span>
            </div>

            {/* Note on In-Progress Degree */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.625rem',
                backgroundColor: 'var(--bg-hover)',
                padding: '0.875rem 1rem',
                border: '1px solid var(--border-subtle)',
                marginTop: '1.5rem',
              }}
            >
              <AlertCircle
                size={16}
                color="var(--accent-green)"
                style={{ flexShrink: 0, marginTop: '2px' }}
              />
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                }}
              >
                Active undergraduate student pursuing rigorous core concepts in computational
                intelligence. Coursework and laboratory modules will be updated as semester
                milestones are certified.
              </p>
            </div>
          </div>

          {/* Core Areas & Coursework Pillar */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              padding: 'clamp(1.75rem, 4vw, 3rem)',
            }}
            className="edu-course-col"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <BookOpen size={16} color="var(--accent-green)" />
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                }}
              >
                Core Academic Foundations
              </h4>
            </div>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              {educationData.academicPillars.map((pillar, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px dashed var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-green)',
                      fontWeight: 600,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
                fontStyle: 'italic',
              }}
            >
              * {educationData.note}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
