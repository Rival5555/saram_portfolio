import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { navigationItems } from '../../data/navigation';
import { useScroll } from '../../hooks/useScroll';
import { THEME_STORAGE_KEY, BREAKPOINTS } from '../../utils/constants';
import { Container } from '../common/Container';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  const { isScrolled, activeSection } = useScroll(navigationItems);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
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
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: isScrolled ? '0.875rem' : '1.25rem',
        paddingBottom: isScrolled ? '0.875rem' : '1.25rem',
        backgroundColor: isScrolled ? 'var(--bg-header-scrolled)' : 'var(--bg-ivory)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 2px 12px rgba(23, 25, 22, 0.04)' : 'none',
        transition: 'all var(--transition-smooth)',
      }}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Brand Monogram & Full Name */}
        <a
          href="#"
          className="brand-logo"
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '0.625rem',
            textDecoration: 'none',
          }}
          aria-label="Back to top"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              fontSize: '0.8125rem',
              color: 'var(--accent-green)',
              padding: '0.2rem 0.45rem',
              border: '1px solid var(--accent-green)',
              letterSpacing: '0.04em',
            }}
          >
            {personalInfo.monogram}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontWeight: 600,
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
                color: 'var(--text-secondary)',
                letterSpacing: '0.02em',
              }}
            >
              {personalInfo.professionalTitle}
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation Links & Availability */}
        <div className="desktop-nav-group">
          <nav
            aria-label="Primary Navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {personalInfo.availability.isConfirmed && (
            <div
              className="status-pill"
              title={personalInfo.availability.status}
              aria-label={`Status: ${personalInfo.availability.status}`}
            >
              <span className="pulse-dot" aria-hidden="true" />
              <span>Available</span>
            </div>
          )}

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
            href="#contact"
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
        navigation={navigationItems}
        activeSection={activeSection}
        availability={personalInfo.availability}
      />
    </header>
  );
};
