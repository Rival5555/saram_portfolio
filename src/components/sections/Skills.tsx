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
          metaRight="TYPOGRAPHIC DIRECTORY // EVIDENCE-BASED"
        />

        {/* 4-Column Exposed Hairline Swiss Typographic Directory */}
        <div className="swiss-grid-12 skills-directory-wrapper">
          {skillsData.map((cat) => (
            <div key={cat.code} className="skill-card-col">
              <span className="skill-cat-code">[{cat.code}]</span>
              <h3 className="skill-cat-title">{cat.title}</h3>
              <p className="skill-cat-desc">{cat.description}</p>

              {/* Typographic Skill Ledger */}
              <ul className="skill-ledger">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className={`skill-ledger-item ${
                      skill.isPlaceholder ? 'skill-ledger-item--pending' : ''
                    }`}
                  >
                    <span>{skill.name}</span>
                    {skill.isPlaceholder && <span className="skill-pending-tag">Pending</span>}
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
