import React from 'react';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { personalInfo } from '../../data/personalInfo';
import { GithubIcon } from '../../assets/icons/Icons';
import { isUnfilled } from '../../utils/helpers';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Projects: React.FC = () => {
  const hasPlaceholders = projectsData.some((p) => p.isPlaceholder);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Progress':
        return {
          bg: 'var(--accent-green-light)',
          color: 'var(--accent-green)',
          border: 'var(--accent-green-border)',
        };
      case 'Research':
        return {
          bg: 'rgba(119, 120, 111, 0.1)',
          color: 'var(--text-secondary)',
          border: 'var(--border-subtle)',
        };
      default:
        return {
          bg: 'var(--bg-hover)',
          color: 'var(--text-primary)',
          border: 'var(--border-subtle)',
        };
    }
  };

  return (
    <section id="projects" className="section" aria-label="Selected Projects">
      <Container>
        <SectionHeading
          tag="PROJECT DIRECTORY"
          titlePrefix="Selected"
          titleHighlight="work & initiatives."
          metaRight="FUTURE-READY SHOWCASE // HONEST VERIFICATION"
        />

        {/* Editorial Notice Banner (only shown while placeholder entries exist) */}
        {hasPlaceholders && (
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              padding: '1rem 1.5rem',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FolderGit2 size={18} color="var(--accent-green)" />
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  Notice on Projects:
                </strong>{' '}
                The entries below represent structured blueprints for upcoming academic and research
                work. Replace them seamlessly in{' '}
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    backgroundColor: 'var(--bg-hover)',
                    padding: '0.1rem 0.35rem',
                  }}
                >
                  src/data/projects.ts
                </code>
                .
              </p>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-green)',
              }}
            >
              ZERO FICTIONAL CLAIMS
            </span>
          </div>
        )}

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {projectsData.map((proj, idx) => {
            const badgeStyle = getStatusBadge(proj.status);

            return (
              <article
                key={proj.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
                className="project-editorial-card"
              >
                <div>
                  {/* Meta Bar: Sequence, Status, Placeholder Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '1.25rem',
                      paddingBottom: '0.875rem',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          color: 'var(--accent-green)',
                        }}
                      >
                        PRJ_0{idx + 1}
                      </span>
                      {proj.isPlaceholder && (
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6875rem',
                            backgroundColor: 'var(--placeholder-badge-bg)',
                            color: 'var(--placeholder-badge-text)',
                            padding: '0.15rem 0.45rem',
                            border: '1px dashed var(--border-strong)',
                          }}
                        >
                          Placeholder Entry
                        </span>
                      )}
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        backgroundColor: badgeStyle.bg,
                        color: badgeStyle.color,
                        border: `1px solid ${badgeStyle.border}`,
                        padding: '0.2rem 0.55rem',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {proj.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      marginBottom: '1.25rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {proj.title}
                  </h3>

                  {/* Structured Problem & Approach */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          textTransform: 'uppercase',
                          color: 'var(--text-tertiary)',
                          letterSpacing: '0.06em',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Problem Statement
                      </div>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.6,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {proj.problem}
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          textTransform: 'uppercase',
                          color: 'var(--text-tertiary)',
                          letterSpacing: '0.06em',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Proposed Architecture / Approach
                      </div>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.6,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {proj.approach}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer: Tech Stack & Links */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          color: 'var(--text-primary)',
                          backgroundColor: 'var(--bg-hover)',
                          padding: '0.2rem 0.5rem',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Repository / Demo Link */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    {proj.githubUrl &&
                      (() => {
                        const unfilledRepo = isUnfilled(proj.githubUrl);
                        const resolvedUrl = unfilledRepo
                          ? personalInfo.contact.github
                          : proj.githubUrl;
                        return (
                          <a
                            href={resolvedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-link"
                            style={{ fontSize: '0.8125rem' }}
                          >
                            <GithubIcon size={14} />
                            <span>
                              {unfilledRepo ? 'GitHub Profile (Repo Pending)' : 'View Repository'}
                            </span>
                            <ExternalLink size={12} className="icon-arrow" />
                          </a>
                        );
                      })()}

                    {proj.demoUrl && !isUnfilled(proj.demoUrl) && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link"
                        style={{ fontSize: '0.8125rem' }}
                      >
                        <Sparkles size={14} />
                        <span>Live Verification</span>
                        <ExternalLink size={12} className="icon-arrow" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
