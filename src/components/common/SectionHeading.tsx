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
      <div className="section-tag">{tag}</div>
      {metaRight ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <h2 className="section-title">
            {titlePrefix}{' '}
            <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>
              {titleHighlight}
            </span>
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--text-tertiary)',
            }}
          >
            {metaRight}
          </span>
        </div>
      ) : (
        <h2 className="section-title">
          {titlePrefix}{' '}
          <span className="font-editorial" style={{ color: 'var(--accent-green)' }}>
            {titleHighlight}
          </span>
        </h2>
      )}
    </div>
  );
};
