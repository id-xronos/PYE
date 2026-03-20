import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Card({ title, children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-6 shadow-sm ${className}`}
      {...props}
    >
      {title && <h3 className="mb-4 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
