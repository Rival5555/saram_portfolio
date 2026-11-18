import React from 'react';

interface SectionHeadingProps {
  tag: string;
  titlePrefix: string;
  titleHighlight: string;
  metaRight?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  titlePrefix,
  titleHighlight,
  metaRight,
}) => {
  return (
    <div className="section-header">
      <div className="section-index-bar">
        <div className="section-tag">
          <span>{tag}</span>
        </div>
        {metaRight && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.06em',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
            }}
          >
            {metaRight}
          </span>
        )}
      </div>

      <h2 className="section-title">
        {titlePrefix}{' '}
        <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>
          {titleHighlight}
        </span>
      </h2>
    </div>
  );
};
