import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

/**
 * Subtle Swiss coordinate precision cursor follower for desktop fine-pointer devices.
 * Automatically disabled on touch devices and when prefers-reduced-motion is enabled.
 */
export const CustomCursor: React.FC = () => {
  const isFinePointer = useMediaQuery('(pointer: fine)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFinePointer, prefersReducedMotion]);

  if (!isFinePointer || prefersReducedMotion || !position) {
    return null;
  }

  return (
    <div
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
        opacity: 0.35,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        transition: 'transform 60ms linear',
      }}
    />
  );
};
