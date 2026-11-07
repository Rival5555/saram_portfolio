import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });
  const { personal, navigation } = portfolioData;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#121412' : '#F5F3ED');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 180) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section ScrollSpy
  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navigation]);

  // Close mobile menu on Esc key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 860 && mobileMenuOpen) {
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

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            SZ
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
              {personal.fullName}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.02em',
              }}
            >
              {personal.professionalTitle}
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation Links & Availability */}
        <div className="desktop-nav-group">
          <nav
            aria-label="Primary Navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
          >
            {navigation.map((item) => {
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

          {/* Availability Indicator */}
          {personal.availability.isConfirmed && (
            <div
              className="status-pill"
              title={personal.availability.status}
              aria-label={`Status: ${personal.availability.status}`}
            >
              <span className="pulse-dot" aria-hidden="true" />
              <span>Available</span>
            </div>
          )}

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={theme === 'dark' ? 'Switch to light editorial theme' : 'Switch to dark editorial theme'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Quick Contact CTA */}
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
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-menu-trigger-group">
          <button
            type="button"
            onClick={toggleTheme}
            className="mobile-menu-trigger"
            aria-label={theme === 'dark' ? 'Switch to light editorial theme' : 'Switch to dark editorial theme'}
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
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
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
            {personal.availability.isConfirmed && (
              <div style={{ paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div className="status-pill">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span>{personal.availability.status}</span>
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
                    onClick={() => setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
