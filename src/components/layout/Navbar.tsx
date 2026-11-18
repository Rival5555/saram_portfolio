import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { navigationItems } from '../../data/navigation';
import { useScroll } from '../../hooks/useScroll';
import { THEME_STORAGE_KEY, BREAKPOINTS } from '../../utils/constants';
import { safeGetStorage, safeSetStorage, scrollToTop } from '../../utils/helpers';
import { Container } from '../common/Container';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = safeGetStorage(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  const { isScrolled, activeSection } = useScroll(navigationItems);

  const isHomeRoute = (): boolean => {
    if (typeof window === 'undefined') return true;
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return path === '/' || path === '/index.html';
  };

  const resolveSectionHref = (hashHref: string): string => {
    if (isHomeRoute()) return hashHref;
    return `/${hashHref}`;
  };

  const handleSectionNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hashHref: string) => {
    setMobileMenuOpen(false);
    const targetId = hashHref.replace(/^#/, '');
    const existingEl = document.getElementById(targetId);

    if (existingEl) {
      e.preventDefault();
      window.history.pushState(null, '', hashHref);
      existingEl.scrollIntoView({ behavior: 'smooth' });
    } else if (!isHomeRoute()) {
      e.preventDefault();
      window.history.pushState(null, '', `/${hashHref}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    e.preventDefault();
    if (isHomeRoute()) {
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
      scrollToTop();
    } else {
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    safeSetStorage(THEME_STORAGE_KEY, theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#121412' : '#F5F3ED');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINTS.md && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handlePointerDownOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        e.target instanceof Node &&
        !headerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handlePointerDownOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handlePointerDownOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: isScrolled ? '0.875rem' : '1.125rem',
        paddingBottom: isScrolled ? '0.875rem' : '1.125rem',
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'padding var(--transition-smooth), background-color var(--transition-fast)',
      }}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Brand Monogram & Full Name */}
        <a
          href="/"
          onClick={handleBrandClick}
          className="brand-logo"
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          title="Back to home"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              fontSize: '0.75rem',
              color: 'var(--accent-green)',
              padding: '0.15rem 0.4rem',
              border: '1px solid var(--accent-green)',
              letterSpacing: '0.06em',
            }}
          >
            {personalInfo.monogram}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontWeight: 500,
                fontSize: '0.9375rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
              }}
            >
              {personalInfo.fullName}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
              }}
            >
              {personalInfo.professionalTitle}
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation Links */}
        <div className="desktop-nav-group">
          <nav
            aria-label="Primary Navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '1.625rem' }}
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={resolveSectionHref(item.href)}
                  onClick={(e) => handleSectionNavClick(e, item.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div
            style={{
              width: '1px',
              height: '16px',
              backgroundColor: 'var(--border-subtle)',
            }}
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={
              theme === 'dark' ? 'Switch to light editorial theme' : 'Switch to dark editorial theme'
            }
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href={resolveSectionHref('#contact')}
            onClick={(e) => handleSectionNavClick(e, '#contact')}
            className="editorial-link"
            style={{ fontSize: '0.875rem', paddingBottom: '1px' }}
          >
            <span>Connect</span>
            <ArrowUpRight size={14} className="icon-arrow" />
          </a>
        </div>

        {/* Mobile Controls: Theme Toggle + Hamburger */}
        <div
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          className="mobile-menu-trigger-group"
        >
          <button
            type="button"
            onClick={toggleTheme}
            className="mobile-menu-trigger"
            aria-label={
              theme === 'dark' ? 'Switch to light editorial theme' : 'Switch to dark editorial theme'
            }
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={handleSectionNavClick}
        resolveHref={resolveSectionHref}
        navigation={navigationItems}
        activeSection={activeSection}
        availability={personalInfo.availability}
      />
    </header>
  );
};
