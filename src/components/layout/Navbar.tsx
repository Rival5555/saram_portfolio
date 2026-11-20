import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { navigationItems } from '../../data/navigation';
import { useScroll } from '../../hooks/useScroll';
import { THEME_STORAGE_KEY, BREAKPOINTS } from '../../utils/constants';
import { getInitialTheme, safeSetStorage, scrollToTop } from '../../utils/helpers';
import { Container } from '../common/Container';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme(THEME_STORAGE_KEY));

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
      metaTheme.setAttribute('content', theme === 'dark' ? '#111311' : '#F5F3ED');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
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
      className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Container className="site-header-inner">
        {/* Left: Brand Monogram & Full Name */}
        <a href="/" onClick={handleBrandClick} className="brand-logo" title="Back to home">
          <span className="brand-monogram">{personalInfo.monogram}</span>
          <div className="brand-identity">
            <span className="brand-name">{personalInfo.fullName}</span>
            <span className="brand-title">{personalInfo.professionalTitle}</span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation Links */}
        <div className="desktop-nav-group">
          <nav aria-label="Primary Navigation" className="primary-nav">
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

          <div className="nav-divider" aria-hidden="true" />

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
            className="editorial-link nav-connect-link"
          >
            <span>Connect</span>
            <ArrowUpRight size={14} className="icon-arrow" />
          </a>
        </div>

        {/* Mobile Controls: Theme Toggle + Hamburger */}
        <div className="mobile-menu-trigger-group">
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
            ref={menuButtonRef}
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
