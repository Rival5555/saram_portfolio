import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal, navigation } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F3ED]/90 backdrop-blur-md border-b border-[#DCD9D0] py-3.5 shadow-[0_2px_12px_rgba(23,25,22,0.03)]'
          : 'bg-[#F5F3ED] py-5 border-b border-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(245, 243, 237, 0.94)' : 'var(--bg-ivory)',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
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
              fontSize: '0.875rem',
              color: 'var(--accent-green)',
              padding: '0.2rem 0.45rem',
              border: '1px solid var(--accent-green)',
              letterSpacing: '0.04em',
            }}
          >
            H × I
          </span>
          <span
            style={{
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            {personal.fullName}
          </span>
        </a>

        {/* Center / Right: Desktop Navigation Links & Availability */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2.25rem' }} className="desktop-nav-group">
          <nav
            aria-label="Primary Navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                  transition: 'color var(--transition-fast)',
                }}
                className="nav-link-hover"
              >
                {item.label}
              </a>
            ))}
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

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            background: 'none',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
          className="mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    padding: '0.35rem 0',
                    borderBottom: '1px solid rgba(220, 217, 208, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} color="var(--accent-green)" />
                </a>
              ))}
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

      {/* Inline styles for media query responsive display */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav-group {
            display: flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
        .nav-link-hover:hover {
          color: var(--text-primary) !important;
        }
      `}</style>
    </header>
  );
};
