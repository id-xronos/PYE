import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Container({ size = 'lg', children, className = '', ...props }: ContainerProps) {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto w-full px-4 ${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  );
}
