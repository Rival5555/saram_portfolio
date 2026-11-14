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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
      if (window.scrollY < 180) {
        setActiveSection('');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

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

  return { isScrolled, activeSection };
}
