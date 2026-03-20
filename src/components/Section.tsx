import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: 'section' | 'article' | 'div';
}

export function Section({ as: Tag = 'section', children, className = '', ...props }: SectionProps) {
  return (
    <Tag className={`py-12 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
