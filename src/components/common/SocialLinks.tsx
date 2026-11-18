import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { socialLinksData } from '../../data/socialLinks';
import { isUnfilled, sanitizeUrl } from '../../utils/helpers';

export const SocialLinks: React.FC = () => {
  return (
    <div>
      {socialLinksData.map((item, idx) => {
        const pending = isUnfilled(item.url);
        const rowNum = `0${idx + 2}`;

        if (pending) {
          return (
            <div
              key={item.id}
              style={{
                padding: '1.25rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.2rem',
                  }}
                >
                  {rowNum} // {item.category}
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {item.label}
                </div>
              </div>
              <span className="placeholder-indicator" style={{ marginLeft: 0 }}>
                URL Pending
              </span>
            </div>
          );
        }

        return (
          <a
            key={item.id}
            href={sanitizeUrl(item.url)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1.25rem 0',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              gap: '1rem',
            }}
            className="channel-card"
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.2rem',
                }}
              >
                {rowNum} // {item.category}
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                }}
              >
                {item.label}
              </div>
            </div>
            <span className="editorial-link" style={{ fontSize: '0.8125rem' }}>
              <span>Visit Profile</span>
              <ArrowUpRight size={14} className="icon-arrow" />
            </span>
          </a>
        );
      })}
    </div>
  );
};
