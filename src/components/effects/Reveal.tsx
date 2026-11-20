import React, { useEffect } from 'react';
import { REVEAL_SELECTORS } from '../../utils/constants';

interface RevealProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Coordinates intersection-based scroll reveal animations across all portfolio sections.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className = '' }) => {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS);
    if (targets.length === 0) return;

    document.documentElement.classList.add('reveal-ready');
    targets.forEach((el) => el.classList.add('reveal-item'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);

  if (!children) return null;

  return <div className={className}>{children}</div>;
};
