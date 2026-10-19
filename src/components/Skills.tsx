import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="section" aria-label="Skills and Competencies">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">COMPETENCIES</div>
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
              Skills & <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>capabilities.</span>
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-tertiary)',
              }}
            >
              TYPOGRAPHIC DIRECTORY // STRICTLY VERIFIED
            </span>
          </div>
        </div>

        {/* 4 Grouped Typographic Categories */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 2.5vw, 2.5rem)',
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.code}
              style={{
                gridColumn: 'span 12',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-smooth)',
              }}
              className="skill-card-col"
            >
              <div>
                {/* Header: Category Code & Title */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-green)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    [{cat.code}]
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    {cat.skills.length} ITEMS
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {cat.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '1.5rem',
                  }}
                >
                  {cat.description}
                </p>

                {/* Typographic Skill List */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.625rem',
                  }}
                >
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem 0.75rem',
                        backgroundColor: skill.isPlaceholder ? 'var(--placeholder-badge-bg)' : 'var(--bg-hover)',
                        border: skill.isPlaceholder ? '1px dashed var(--border-strong)' : '1px solid var(--border-subtle)',
                        fontSize: '0.875rem',
                        color: skill.isPlaceholder ? 'var(--placeholder-badge-text)' : 'var(--text-primary)',
                      }}
                    >
                      <span style={{ fontWeight: 500 }}>{skill.name}</span>
                      {skill.isPlaceholder && (
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.625rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: 'var(--text-tertiary)',
                          }}
                        >
                          Placeholder
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Indicator */}
              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                NO ARBITRARY METRICS // EVIDENCE-BASED
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) and (max-width: 1023px) {
          .skill-card-col {
            grid-column: span 6 !important;
          }
        }
        @media (min-width: 1024px) {
          .skill-card-col {
            grid-column: span 3 !important;
          }
        }
        .skill-card-col:hover {
          border-color: var(--border-strong) !important;
        }
      `}</style>
    </section>
  );
};
