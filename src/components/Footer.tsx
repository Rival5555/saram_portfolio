import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-ivory)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
      }}
      aria-label="Site Footer"
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem',
          }}
        >
          {/* Identity & Origin */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.625rem', marginBottom: '0.35rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--accent-green)',
                }}
              >
                H × I
              </span>
              <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                {personal.fullName}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
              }}
            >
              Artificial Intelligence × Public Service × Communication — {personal.location}
            </div>
          </div>

          {/* Dynamic Year & Copyright */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
              textAlign: 'center',
            }}
          >
            © {currentYear} {personal.fullName} · All rights reserved.
            <div style={{ fontSize: '0.6875rem', marginTop: '0.2rem' }}>
              Designed with Swiss Minimalist Editorial Principles
            </div>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              padding: '0.5rem 0.875rem',
              backgroundColor: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .back-to-top-btn:hover {
          background-color: var(--bg-hover) !important;
          border-color: var(--text-primary) !important;
        }
      `}</style>
    </footer>
  );
};
