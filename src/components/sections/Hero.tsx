import React from 'react';
import { ArrowDown, ArrowUpRight, FileDown } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { sanitizeUrl } from '../../utils/helpers';
import { CoordinateGraphic } from '../../assets/illustrations/CoordinateGraphic';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const handleResumeClick = () => {
    const safeResumeUrl = sanitizeUrl(personalInfo.contact.resumeUrl);
    if (safeResumeUrl !== '#') {
      const newWindow = window.open(safeResumeUrl, '_blank', 'noopener,noreferrer');
      if (newWindow) {
        newWindow.opener = null;
      }
    } else {
      window.print();
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        paddingTop: 'calc(var(--nav-height) + clamp(2.5rem, 5vw, 4.5rem))',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        position: 'relative',
        minHeight: '86vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container>
        {/* Top Architectural Specification Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            paddingBottom: '1rem',
            marginBottom: 'clamp(2rem, 4vw, 3.25rem)',
            borderBottom: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
          }}
        >
          <span>00 — {personalInfo.taglineEyebrow}</span>
          <span>
            {personalInfo.location} // {personalInfo.coordinates}
          </span>
        </div>

        <div className="hero-editorial-wrapper">
          {/* Main Content Column */}
          <div className="hero-text-col">
            {personalInfo.availability.isConfirmed && (
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-green)',
                  marginBottom: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--accent-green)',
                    display: 'inline-block',
                  }}
                  aria-hidden="true"
                />
                <span>{personalInfo.availability.status}</span>
              </div>
            )}

            {/* Main Editorial Headline */}
            <h1
              style={{
                fontSize: 'var(--text-hero)',
                fontWeight: 400,
                lineHeight: 1.06,
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
                fontSize: 'clamp(1.0625rem, 1.5vw, 1.2rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '46ch',
                marginBottom: '2.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              {personalInfo.bio.heroParagraph}
            </p>

            {/* Calls to Action */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.875rem',
              }}
            >
              <Button variant="primary" href="#projects">
                <span>Explore my work</span>
                <ArrowDown size={15} />
              </Button>

              <Button variant="secondary" href="#contact">
                <span>Get in touch</span>
                <ArrowUpRight size={15} />
              </Button>

              <Button
                variant="secondary"
                onClick={handleResumeClick}
                title="Print or save Swiss-style CV as PDF"
                ariaLabel="CV / Resume — Download or print"
              >
                <span>CV / Resume</span>
                <FileDown size={15} />
              </Button>

              <Button variant="editorial" href="#about" style={{ marginLeft: '0.5rem' }}>
                <span>Read perspective</span>
              </Button>
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
            marginTop: 'clamp(2.75rem, 5vw, 4.25rem)',
            paddingTop: '1rem',
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
              letterSpacing: '0.06em',
            }}
          >
            DISCIPLINE × EMPATHY × REASONING
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.06em',
            }}
          >
            NATIONAL TEXTILE UNIVERSITY // BS AI (2023–2028)
          </div>
        </div>
      </Container>
    </section>
  );
};
