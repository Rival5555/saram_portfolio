import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Progress':
        return { bg: 'rgba(41, 76, 59, 0.08)', color: 'var(--accent-green)', border: 'rgba(41, 76, 59, 0.3)' };
      case 'Research':
        return { bg: 'rgba(119, 120, 111, 0.1)', color: 'var(--text-secondary)', border: 'var(--border-subtle)' };
      default:
        return { bg: 'var(--bg-hover)', color: 'var(--text-primary)', border: 'var(--border-subtle)' };
    }
  };

  return (
    <section id="projects" className="section" aria-label="Selected Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">PROJECT DIRECTORY</div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <h2 className="section-title">
              Selected <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>work & initiatives.</span>
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-tertiary)',
              }}
            >
              FUTURE-READY SHOWCASE // HONEST VERIFICATION
            </span>
          </div>
        </div>

        {/* Editorial Notice Banner */}
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
              <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Notice on Projects:</strong> The entries below represent structured blueprints for upcoming academic and research work. Replace them seamlessly in <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', backgroundColor: 'var(--bg-hover)', padding: '0.1rem 0.35rem' }}>portfolioData.ts</code>.
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

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {projects.map((proj, idx) => {
            const badgeStyle = getStatusBadge(proj.status);

            return (
              <article
                key={proj.id}
                style={{
                  gridColumn: 'span 12',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-smooth)',
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
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
                  {/* Verified Tech Stack */}
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
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link"
                        style={{ fontSize: '0.8125rem' }}
                      >
                        <GithubIcon size={14} />
                        <span>Repository Placeholder</span>
                        <ExternalLink size={12} className="icon-arrow" />
                      </a>
                    )}

                    {proj.demoUrl && (
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
      </div>

      <style>{`
        @media (min-width: 900px) {
          .project-editorial-card {
            grid-column: span 4 !important;
          }
        }
        .project-editorial-card:hover {
          border-color: var(--border-strong) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
