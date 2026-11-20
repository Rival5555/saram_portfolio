import React from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../../utils/helpers';

export const BackToTop: React.FC = () => {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="back-to-top-btn"
      aria-label="Scroll back to top of page"
    >
      <span>Top</span>
      <ArrowUp size={14} />
    </button>
  );
};
