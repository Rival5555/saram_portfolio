import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Clock, MapPin, Edit3 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section" aria-label="Professional Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">CHRONOLOGY</div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <h2 className="section-title">
              Professional <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>experience.</span>
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-tertiary)',
              }}
            >
              EDITORIAL TIMELINE // 02 ENTRIES
            </span>
          </div>
        </div>

        {/* Editorial Vertical List with Thin Dividers */}
        <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {experience.map((item) => (
            <article
              key={item.id}
              style={{
                paddingTop: 'clamp(2rem, 4vw, 3rem)',
                paddingBottom: 'clamp(2rem, 4vw, 3rem)',
                borderBottom: '1px solid var(--border-subtle)',
                transition: 'background-color var(--transition-fast)',
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
                {/* Column 1: Sequence & Time Period */}
                <div style={{ gridColumn: 'span 12' }} className="exp-meta-col">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--accent-green)',
                      }}
                    >
                      {item.sequence}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {item.duration && (
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-green)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        marginTop: '0.25rem',
                      }}
                    >
                      <Clock size={13} />
                      <span>{item.duration}</span>
                    </div>
                  )}

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Column 2: Role & Organization */}
                <div style={{ gridColumn: 'span 12' }} className="exp-title-col">
                  <h3
                    style={{
                      fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
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
                      fontSize: '1.0625rem',
                      fontWeight: 500,
                      color: 'var(--accent-green)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.organization}
                  </div>
                </div>

                {/* Column 3: Verified Description & Tags */}
                <div style={{ gridColumn: 'span 12' }} className="exp-desc-col">
                  {item.isPlaceholderDescription && (
                    <div
                      style={{
                        marginBottom: '0.875rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--placeholder-badge-text)',
                        backgroundColor: 'var(--placeholder-badge-bg)',
                        padding: '0.25rem 0.5rem',
                        border: '1px dashed var(--border-strong)',
                      }}
                    >
                      <Edit3 size={11} />
                      <span>Pending verified responsibilities from owner</span>
                    </div>
                  )}

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Competency tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          color: 'var(--text-primary)',
                          backgroundColor: 'var(--bg-hover)',
                          padding: '0.2rem 0.55rem',
                          border: '1px solid var(--border-subtle)',
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
      </div>

      <style>{`
        @media (min-width: 900px) {
          .exp-meta-col {
            grid-column: span 3 !important;
          }
          .exp-title-col {
            grid-column: span 4 !important;
          }
          .exp-desc-col {
            grid-column: span 5 !important;
          }
        }
        .experience-item-row:hover {
          background-color: rgba(236, 234, 227, 0.4);
        }
      `}</style>
    </section>
  );
};
