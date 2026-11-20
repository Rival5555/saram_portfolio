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
        {metaRight && <span className="section-meta-right">{metaRight}</span>}
      </div>

      <h2 className="section-title">
        {titlePrefix}{' '}
        <span className="font-editorial section-title-accent">{titleHighlight}</span>
      </h2>
    </div>
  );
};
