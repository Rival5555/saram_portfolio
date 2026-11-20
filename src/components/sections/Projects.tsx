import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { personalInfo } from '../../data/personalInfo';
import { GithubIcon } from '../../assets/icons/Icons';
import { isUnfilled, sanitizeUrl } from '../../utils/helpers';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Projects: React.FC = () => {
  const hasPlaceholders = projectsData.some((p) => p.isPlaceholder);

  return (
    <section id="projects" className="section" aria-label="Selected Projects">
      <Container>
        <SectionHeading
          tag="PROJECT DIRECTORY"
          titlePrefix="Selected"
          titleHighlight="work & initiatives."
          metaRight="CASE-STUDY INDEX // HONEST VERIFICATION"
        />

        {/* Restrained Editorial Notice Line (only shown while placeholder entries exist) */}
        {hasPlaceholders && (
          <div className="projects-notice">
            <p className="projects-notice-text">
              <strong className="projects-notice-strong">Index Note:</strong> The entries below
              represent structured blueprints for upcoming academic and research work, configurable
              in <code className="projects-notice-code">src/data/projects.ts</code>.
            </p>
            <span className="projects-notice-badge">ZERO FICTIONAL CLAIMS</span>
          </div>
        )}

        {/* Swiss Editorial Case-Study Ledger */}
        <div className="ledger-top-rule">
          {projectsData.map((proj) => (
            <article key={proj.id} className="project-editorial-card">
              <div className="swiss-grid-12 swiss-grid-gap-md">
                {/* Column 1: Status & Repository Link */}
                <div className="project-meta-col">
                  <div className="project-status">{proj.status}</div>

                  {proj.isPlaceholder && (
                    <div className="project-blueprint-tag">Blueprint Entry</div>
                  )}

                  {/* Repository / Demo Link */}
                  <div className="project-links">
                    {proj.githubUrl &&
                      (() => {
                        const unfilledRepo = isUnfilled(proj.githubUrl);
                        const resolvedUrl = unfilledRepo
                          ? personalInfo.contact.github
                          : proj.githubUrl;
                        return (
                          <a
                            href={sanitizeUrl(resolvedUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-link project-link-sm"
                          >
                            <GithubIcon size={14} />
                            <span>
                              {unfilledRepo ? 'GitHub Profile (Repo Pending)' : 'View Repository'}
                            </span>
                            <ArrowUpRight size={13} className="icon-arrow" />
                          </a>
                        );
                      })()}

                    {proj.demoUrl && !isUnfilled(proj.demoUrl) && (
                      <a
                        href={sanitizeUrl(proj.demoUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link project-link-sm"
                      >
                        <span>Live Verification</span>
                        <ArrowUpRight size={13} className="icon-arrow" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Column 2: Project Title & Stack */}
                <div className="project-title-col">
                  <h3 className="project-title">{proj.title}</h3>

                  <div className="project-tech-list">
                    {proj.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 3: Structured Problem & Architecture */}
                <div className="project-detail-col">
                  <div className="project-detail-stack">
                    <div>
                      <div className="project-detail-label">Problem Statement</div>
                      <p className="project-detail-body">{proj.problem}</p>
                    </div>

                    <div className="project-approach-block">
                      <div className="project-detail-label">Proposed Architecture / Approach</div>
                      <p className="project-detail-body">{proj.approach}</p>
                    </div>
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
