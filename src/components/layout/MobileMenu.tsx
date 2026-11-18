import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { NavigationItem, AvailabilityInfo } from '../../types/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>, hashHref: string) => void;
  resolveHref?: (hashHref: string) => string;
  navigation: NavigationItem[];
  activeSection: string;
  availability: AvailabilityInfo;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  resolveHref = (h) => h,
  navigation,
  activeSection,
  availability,
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hashHref: string) => {
    if (onNavigate) {
      onNavigate(e, hashHref);
    } else {
      onClose();
    }
  };

  return (
    <div
      id="mobile-navigation"
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-strong)',
        padding: '1.5rem var(--gutter) 2rem',
      }}
      className="fade-in-up"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {availability.isConfirmed && (
          <div
            style={{
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-green)',
            }}
          >
            STATUS // {availability.status}
          </div>
        )}

        <nav
          aria-label="Mobile Navigation"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {navigation.map((item, idx) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={resolveHref(item.href)}
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent-green)' : 'var(--text-primary)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.625rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{item.label}</span>
                </span>
                <ArrowUpRight size={15} color="var(--accent-green)" />
              </a>
            );
          })}
        </nav>

        <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={resolveHref('#contact')}
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-primary"
            style={{ width: '100%' }}
          >
            <span>Get in touch</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
