import React from 'react';
import { experienceData } from '../../data/experience';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" aria-label="Professional Experience">
      <Container>
        <SectionHeading
          tag="CHRONOLOGY"
          titlePrefix="Professional"
          titleHighlight="experience."
          metaRight="EDITORIAL TIMELINE"
        />

        {/* Editorial Vertical Ledger with Thin Dividers */}
        <div className="ledger-top-rule">
          {experienceData.map((item) => (
            <article key={item.id} className="experience-item-row">
              <div className="swiss-grid-12 swiss-grid-gap-md">
                {/* Column 1: Period & Location */}
                <div className="exp-meta-col">
                  <div className="exp-period">{item.period}</div>
                  <div className="exp-location">
                    {item.location}
                    {item.duration ? ` · ${item.duration}` : ''}
                  </div>
                </div>

                {/* Column 2: Role & Organization */}
                <div className="exp-title-col">
                  <h3 className="exp-role">{item.role}</h3>
                  <div className="exp-org">{item.organization}</div>
                </div>

                {/* Column 3: Verified Description & Tags */}
                <div className="exp-desc-col">
                  <p className="exp-desc">{item.description}</p>

                  {item.isPlaceholderDescription && (
                    <div className="exp-placeholder-note">
                      [Note: Specific dates and operational metrics pending owner verification]
                    </div>
                  )}

                  <div className="exp-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="exp-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
