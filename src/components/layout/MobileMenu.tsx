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
    <div id="mobile-navigation" className="mobile-nav-drawer fade-in-up">
      <div className="mobile-nav-stack">
        {availability.isConfirmed && (
          <div className="mobile-nav-status">STATUS // {availability.status}</div>
        )}

        <nav aria-label="Mobile Navigation" className="mobile-nav-links">
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={resolveHref(item.href)}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={15} color="var(--accent-green)" />
              </a>
            );
          })}
        </nav>

        <div className="mobile-nav-cta">
          <a
            href={resolveHref('#contact')}
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-primary"
          >
            <span>Get in touch</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
