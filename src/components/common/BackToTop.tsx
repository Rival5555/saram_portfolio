import React from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../../utils/helpers';

export const BackToTop: React.FC = () => {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        padding: '0.5rem 0.875rem',
        backgroundColor: 'transparent',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
      }}
      className="back-to-top-btn"
      aria-label="Scroll back to top of page"
    >
      <span>Top</span>
      <ArrowUp size={14} />
    </button>
  );
};
