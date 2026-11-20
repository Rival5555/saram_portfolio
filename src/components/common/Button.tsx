import React from 'react';
import { sanitizeUrl } from '../../utils/helpers';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'editorial';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
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
    const safeHref = sanitizeUrl(href);
    const safeRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;
    return (
      <a
        href={safeHref}
        onClick={onClick}
        target={target}
        rel={safeRel}
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
