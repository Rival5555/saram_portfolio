import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CoordinateGraphic } from './CoordinateGraphic';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        paddingTop: 'calc(var(--nav-height) + clamp(2.5rem, 5vw, 4rem))',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="container">
        {/* Editorial Flex/Grid: Text on Left, Coordinate Art on Right */}
        <div className="hero-editorial-wrapper">
          {/* Main Content Column */}
          <div className="hero-text-col">
            {/* Metadata Bar / Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              <span className="eyebrow">
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--accent-green)',
                    display: 'inline-block',
                  }}
                  aria-hidden="true"
                />
                {personal.taglineEyebrow}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <MapPin size={13} color="var(--accent-green)" />
                {personal.location}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '1.75rem',
              }}
            >
              Grounded in service.{' '}
              <br className="hero-break" />
              <span className="font-editorial" style={{ color: 'var(--accent-green)', fontWeight: 400 }}>
                Curious about intelligence.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '44ch',
                marginBottom: '2.25rem',
                letterSpacing: '-0.01em',
              }}
            >
              {personal.bio.heroParagraph}
            </p>

            {/* Calls to Action */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>Explore my work</span>
                <ArrowDown size={16} />
              </a>

              <a href="#contact" className="btn-secondary">
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#about"
                className="editorial-link"
                style={{ marginLeft: '0.5rem' }}
              >
                <span>Read perspective</span>
              </a>
            </div>
          </div>

          {/* Graphic Column */}
          <div className="hero-graphic-col">
            <CoordinateGraphic />
          </div>
        </div>

        {/* Subtle editorial index & coordinate line */}
        <div
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.04em',
            }}
          >
            DISCIPLINE × EMPATHY × REASONING
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.04em',
            }}
          >
            REF: {personal.coordinates}
          </div>
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        .hero-editorial-wrapper {
          display: flex;
          flex-direction: column-reverse;
          gap: 2.5rem;
          align-items: center;
        }

        .hero-text-col {
          width: 100%;
        }

        .hero-graphic-col {
          width: 100%;
          max-width: 380px;
          display: flex;
          justifyContent: center;
        }

        @media (min-width: 860px) {
          .hero-editorial-wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 3rem;
          }

          .hero-text-col {
            flex: 1 1 58%;
            max-width: 60%;
          }

          .hero-graphic-col {
            flex: 1 1 40%;
            max-width: 440px;
            justify-content: flex-end;
          }
        }
      `}</style>
    </section>
  );
};
