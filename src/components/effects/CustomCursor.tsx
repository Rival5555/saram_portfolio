import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

/**
 * Subtle Swiss coordinate precision cursor follower for desktop fine-pointer devices.
 * Uses direct DOM ref updates via requestAnimationFrame to achieve zero React re-renders on mousemove.
 */
export const CustomCursor: React.FC = () => {
  const isFinePointer = useMediaQuery('(pointer: fine)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    let rafId: number | null = null;
    let latestX = -100;
    let latestY = -100;

    const updateCursor = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0.35';
        dotRef.current.style.transform = `translate3d(${latestX - 3}px, ${latestY - 3}px, 0)`;
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateCursor);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isFinePointer, prefersReducedMotion]);

  if (!isFinePointer || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={dotRef}
      className="custom-cursor-dot"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-green)',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'transform 60ms linear',
      }}
    />
  );
};
