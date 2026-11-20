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
    <section id="hero" className="hero-section" aria-label="Introduction">
      <Container>
        {/* Top Architectural Specification Strip */}
        <div className="hero-spec-strip">
          <span>{personalInfo.taglineEyebrow}</span>
          <span>
            {personalInfo.location} // {personalInfo.coordinates}
          </span>
        </div>

        <div className="hero-editorial-wrapper">
          {/* Main Content Column */}
          <div className="hero-text-col">
            {personalInfo.availability.isConfirmed && (
              <div className="hero-availability">
                <span className="hero-availability-dot" aria-hidden="true" />
                <span>{personalInfo.availability.status}</span>
              </div>
            )}

            {/* Main Editorial Headline */}
            <h1 className="hero-headline">
              Grounded in service. <br className="hero-break" />
              <span className="font-editorial hero-headline-accent">
                Curious about intelligence.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="hero-lead">{personalInfo.bio.heroParagraph}</p>

            {/* Calls to Action */}
            <div className="hero-actions">
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

              <Button variant="editorial" href="#about" className="hero-editorial-cta">
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
        <div className="hero-footer-strip">
          <div>DISCIPLINE × EMPATHY × REASONING</div>
          <div>NATIONAL TEXTILE UNIVERSITY // BS AI (2023–2028)</div>
        </div>
      </Container>
    </section>
  );
};
