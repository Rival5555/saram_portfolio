import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin, FileDown } from 'lucide-react';
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
        paddingTop: 'calc(var(--nav-height) + clamp(2.5rem, 5vw, 4rem))',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container>
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
                {personalInfo.taglineEyebrow}
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
                {personalInfo.location}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              style={{
                fontSize: 'var(--text-hero)',
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
              {personalInfo.bio.heroParagraph}
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
              <Button variant="primary" href="#projects">
                <span>Explore my work</span>
                <ArrowDown size={16} />
              </Button>

              <Button variant="secondary" href="#contact">
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </Button>

              <Button
                variant="secondary"
                onClick={handleResumeClick}
                title="Print or save Swiss-style CV as PDF"
                ariaLabel="Download or print CV"
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
            REF: {personalInfo.coordinates}
          </div>
        </div>
      </Container>
    </section>
  );
};
