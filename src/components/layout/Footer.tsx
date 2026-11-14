import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { Container } from '../common/Container';
import { BackToTop } from '../common/BackToTop';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
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
      <Container>
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
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.625rem',
                marginBottom: '0.35rem',
              }}
            >
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
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  color: 'var(--text-primary)',
                }}
              >
                {personalInfo.fullName}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
              }}
            >
              Artificial Intelligence × Public Service × Communication — {personalInfo.location}
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
            © {CURRENT_YEAR} {personalInfo.fullName} · All rights reserved.
            <div style={{ fontSize: '0.6875rem', marginTop: '0.2rem' }}>
              Designed with Swiss Minimalist Editorial Principles
            </div>
          </div>

          <BackToTop />
        </div>
      </Container>
    </footer>
  );
};
