import React from 'react';
import { educationData } from '../../data/education';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" aria-label="Education & Academic Path">
      <Container>
        <SectionHeading
          tag="ACADEMIC FOUNDATION"
          titlePrefix="Education &"
          titleHighlight="curriculum."
          metaRight={`${educationData.institution.toUpperCase()} // ${educationData.statusPeriod}`}
        />

        {/* Architectural 12-Column Editorial Split */}
        <div className="swiss-split-framed">
          {/* Main Degree Profile */}
          <div className="edu-main-col">
            <div className="edu-header-row">
              <span className="edu-status">STATUS // {educationData.degreeStatus}</span>
              <span className="edu-period">{educationData.statusPeriod}</span>
            </div>

            <h3 className="edu-degree">{educationData.degree}</h3>

            <div className="edu-institution">
              {educationData.institution}
              <span className="edu-location">— {educationData.location}</span>
            </div>

            <p className="edu-summary">
              Active undergraduate student pursuing rigorous core concepts in computational
              intelligence. Coursework and laboratory modules are updated as semester milestones are
              certified.
            </p>
          </div>

          {/* Core Areas & Coursework Pillar */}
          <div className="edu-course-col">
            <h4 className="edu-pillars-heading">CORE ACADEMIC FOUNDATIONS</h4>

            <ul className="edu-pillars-list">
              {educationData.academicPillars.map((pillar, idx) => (
                <li key={idx} className="edu-pillar-item">
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div className="edu-note">{educationData.note}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};
