import React from 'react';
import { skillsData } from '../../data/skills';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" aria-label="Skills and Competencies">
      <Container>
        <SectionHeading
          tag="COMPETENCIES"
          titlePrefix="Skills &"
          titleHighlight="capabilities."
          metaRight="TYPOGRAPHIC DIRECTORY // STRICTLY VERIFIED"
        />

        {/* 4 Grouped Typographic Categories */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 2.5vw, 2.5rem)',
          }}
        >
          {skillsData.map((cat) => (
            <div
              key={cat.code}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                        backgroundColor: skill.isPlaceholder
                          ? 'var(--placeholder-badge-bg)'
                          : 'var(--bg-hover)',
                        border: skill.isPlaceholder
                          ? '1px dashed var(--border-strong)'
                          : '1px solid var(--border-subtle)',
                        fontSize: '0.875rem',
                        color: skill.isPlaceholder
                          ? 'var(--placeholder-badge-text)'
                          : 'var(--text-primary)',
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
      </Container>
    </section>
  );
};
