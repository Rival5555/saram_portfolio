import { useState, useEffect } from 'react';
import type { NavigationItem } from '../types/profile';

interface UseScrollResult {
  isScrolled: boolean;
  activeSection: string;
}

export function useScroll(navigation: NavigationItem[], threshold = 20): UseScrollResult {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    let rafId: number | null = null;

    const updateScrollState = () => {
      const y = window.scrollY;
      const nextScrolled = y > threshold;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      if (y < 180 && document.getElementById('hero')) {
        setActiveSection((prev) => (prev === '' ? prev : ''));
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [threshold]);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

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

  return { isScrolled, activeSection };
}
