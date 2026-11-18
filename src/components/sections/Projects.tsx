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
          <div
            style={{
              paddingBottom: '1.75rem',
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '68ch' }}>
              <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                Index Note:
              </strong>{' '}
              The entries below represent structured blueprints for upcoming academic and research
              work, configurable in{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)',
                }}
              >
                src/data/projects.ts
              </code>
              .
            </p>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-green)',
                letterSpacing: '0.06em',
              }}
            >
              ZERO FICTIONAL CLAIMS
            </span>
          </div>
        )}

        {/* Swiss Editorial Case-Study Ledger */}
        <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {projectsData.map((proj) => (
            <article key={proj.id} className="project-editorial-card">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: 'clamp(1.25rem, 2.5vw, 2.25rem)',
                  alignItems: 'flex-start',
                }}
              >
                {/* Column 1: Status & Repository Link */}
                <div className="project-meta-col">
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-green)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {proj.status}
                  </div>

                  {proj.isPlaceholder && (
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--text-tertiary)',
                        letterSpacing: '0.04em',
                        marginBottom: '1.25rem',
                      }}
                    >
                      Blueprint Entry
                    </div>
                  )}

                  {/* Repository / Demo Link */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      marginTop: '0.75rem',
                    }}
                  >
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
                            className="editorial-link"
                            style={{ fontSize: '0.8125rem' }}
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
                        className="editorial-link"
                        style={{ fontSize: '0.8125rem' }}
                      >
                        <span>Live Verification</span>
                        <ArrowUpRight size={13} className="icon-arrow" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Column 2: Project Title & Stack */}
                <div className="project-title-col">
                  <h3
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '1rem',
                    }}
                  >
                    {proj.title}
                  </h3>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem 1rem' }}>
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--accent-green)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 3: Structured Problem & Architecture */}
                <div className="project-detail-col">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          textTransform: 'uppercase',
                          color: 'var(--text-tertiary)',
                          letterSpacing: '0.06em',
                          marginBottom: '0.3rem',
                        }}
                      >
                        Problem Statement
                      </div>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.68,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {proj.problem}
                      </p>
                    </div>

                    <div
                      style={{
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          textTransform: 'uppercase',
                          color: 'var(--text-tertiary)',
                          letterSpacing: '0.06em',
                          marginBottom: '0.3rem',
                        }}
                      >
                        Proposed Architecture / Approach
                      </div>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.68,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {proj.approach}
                      </p>
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
