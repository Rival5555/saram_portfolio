import React from 'react';

interface ContainerProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className = '', style, children }) => {
  return (
    <div className={`container ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};
