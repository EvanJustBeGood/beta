import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  'aria-label'?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  size = 'md',
  onClick,
  'aria-label': ariaLabel 
}) => {
  const sizeClasses = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg'
  };

  const iconClass = `fas fa-${name} ${sizeClasses[size]} ${className}`.trim();

  return (
    <i
      className={iconClass}
      onClick={onClick}
      aria-label={ariaLabel}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    />
  );
};

export default Icon;
