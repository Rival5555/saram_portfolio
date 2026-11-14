import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'editorial';
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  title?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  onClick,
  target,
  rel,
  title,
  ariaLabel,
  className = '',
  style,
  children,
}) => {
  const variantClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'editorial-link';

  const combinedClassName = `${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        title={title}
        aria-label={ariaLabel}
        className={combinedClassName}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      className={combinedClassName}
      style={style}
    >
      {children}
    </button>
  );
};
