import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, MessageSquareCode, BrainCircuit } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const pillarIcons = [
    <ShieldCheck size={22} color="var(--accent-green)" />,
    <MessageSquareCode size={22} color="var(--accent-green)" />,
    <BrainCircuit size={22} color="var(--accent-green)" />,
  ];

  return (
    <section id="about" className="section" aria-label="About perspective">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">PERSPECTIVE & BACKGROUND</div>
          <h2 className="section-title">
            A different <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>perspective.</span>
          </h2>
        </div>

        {/* Lead Narrative Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3.5vw, 3rem)',
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
          }}
        >
          <div style={{ gridColumn: 'span 12' }} className="about-lead-col">
            <p
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)',
                lineHeight: 1.45,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                fontWeight: 400,
                borderLeft: '2px solid var(--accent-green)',
                paddingLeft: '1.5rem',
              }}
            >
              {personal.bio.perspectiveIntro}
            </p>
          </div>

          <div style={{ gridColumn: 'span 12' }} className="about-body-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {personal.bio.perspectiveBody.map((paragraph, index) => (
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

        {/* 3 Pillars: The Intersecting Dimensions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
          }}
        >
          {personal.bio.pillars.map((pillar, idx) => (
            <div
              key={pillar.number}
              style={{
                gridColumn: 'span 12',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-smooth), transform var(--transition-smooth)',
              }}
              className="about-pillar-card"
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--accent-green)',
                    }}
                  >
                    // {pillar.number}
                  </span>
                  <div>{pillarIcons[idx]}</div>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.35rem',
                  }}
                >
                  {pillar.source}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {pillar.highlight}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-green)',
                }}
              >
                CORE ATTRIBUTE
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-lead-col {
            grid-column: span 5 !important;
          }
          .about-body-col {
            grid-column: span 7 !important;
          }
          .about-pillar-card {
            grid-column: span 4 !important;
          }
        }
        .about-pillar-card:hover {
          border-color: var(--border-strong) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
