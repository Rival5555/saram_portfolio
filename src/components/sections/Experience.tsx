import React from 'react';
import { experienceData } from '../../data/experience';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" aria-label="Professional Experience">
      <Container>
        <SectionHeading
          tag="CHRONOLOGY"
          titlePrefix="Professional"
          titleHighlight="experience."
          metaRight="EDITORIAL TIMELINE"
        />

        {/* Editorial Vertical Ledger with Thin Dividers */}
        <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {experienceData.map((item) => (
            <article
              key={item.id}
              style={{
                paddingTop: 'clamp(2.25rem, 4vw, 3.25rem)',
                paddingBottom: 'clamp(2.25rem, 4vw, 3.25rem)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
              className="experience-item-row"
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: 'clamp(1rem, 2.5vw, 2rem)',
                  alignItems: 'flex-start',
                }}
              >
                {/* Column 1: Period & Location */}
                <div className="exp-meta-col">
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.period}
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {item.location}
                    {item.duration ? ` · ${item.duration}` : ''}
                  </div>
                </div>

                {/* Column 2: Role & Organization */}
                <div className="exp-title-col">
                  <h3
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.role}
                  </h3>

                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'var(--accent-green)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.organization}
                  </div>
                </div>

                {/* Column 3: Verified Description & Tags */}
                <div className="exp-desc-col">
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.72,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.description}
                  </p>

                  {item.isPlaceholderDescription && (
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--text-tertiary)',
                        letterSpacing: '0.04em',
                        marginBottom: '1rem',
                      }}
                    >
                      [Note: Specific dates and operational metrics pending owner verification]
                    </div>
                  )}

                  {/* Competency tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem 1.25rem',
                      paddingTop: '0.875rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-primary)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
