import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../assets/icons/Icons';
import { socialLinksData } from '../../data/socialLinks';
import { isUnfilled } from '../../utils/helpers';

export const SocialLinks: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1rem',
      }}
    >
      {socialLinksData.map((item) => {
        const pending = isUnfilled(item.url);
        const IconComponent = item.id === 'linkedin' ? LinkedinIcon : GithubIcon;

        if (pending) {
          return (
            <div
              key={item.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px dashed var(--border-strong)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <IconComponent size={20} color="var(--text-tertiary)" />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-tertiary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.label}
                  </div>
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
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
            }}
            className="channel-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <IconComponent size={20} color="var(--accent-green)" />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.category}
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.label}
                </div>
              </div>
            </div>
            <ArrowUpRight size={16} color="var(--text-secondary)" className="icon-arrow" />
          </a>
        );
      })}
    </div>
  );
};
