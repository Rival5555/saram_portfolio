import React from 'react';
import { skillsData } from '../../data/skills';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" aria-label="Skills and Competencies">
      <Container>
        <SectionHeading
          index="04"
          tag="COMPETENCIES"
          titlePrefix="Skills &"
          titleHighlight="capabilities."
          metaRight="TYPOGRAPHIC DIRECTORY // EVIDENCE-BASED"
        />

        {/* 4-Column Exposed Hairline Swiss Typographic Directory */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '2rem',
          }}
        >
          {skillsData.map((cat) => (
            <div key={cat.code} className="skill-card-col">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
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
                  0{cat.skills.length} ITEMS
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.1875rem',
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
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}
              >
                {cat.description}
              </p>

              {/* Typographic Skill Ledger */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      padding: '0.65rem 0',
                      borderBottom: '1px solid var(--border-subtle)',
                      fontSize: '0.875rem',
                      color: skill.isPlaceholder
                        ? 'var(--text-tertiary)'
                        : 'var(--text-primary)',
                    }}
                  >
                    <span style={{ fontWeight: skill.isPlaceholder ? 400 : 500 }}>
                      {skill.name}
                    </span>
                    {skill.isPlaceholder && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.625rem',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: 'var(--text-tertiary)',
                          flexShrink: 0,
                        }}
                      >
                        Pending
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
