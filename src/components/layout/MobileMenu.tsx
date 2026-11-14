import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { NavigationItem, AvailabilityInfo } from '../../types/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  activeSection: string;
  availability: AvailabilityInfo;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navigation,
  activeSection,
  availability,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.5rem var(--gutter) 2rem',
        boxShadow: '0 10px 25px -5px rgba(23, 25, 22, 0.08)',
      }}
      className="fade-in-up"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {availability.isConfirmed && (
          <div style={{ paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="status-pill">
              <span className="pulse-dot" aria-hidden="true" />
              <span>{availability.status}</span>
            </div>
          </div>
        )}

        <nav
          aria-label="Mobile Navigation"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent-green)' : 'var(--text-primary)',
                  padding: '0.35rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} color="var(--accent-green)" />
              </a>
            );
          })}
        </nav>

        <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href="#contact"
            onClick={onClose}
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
