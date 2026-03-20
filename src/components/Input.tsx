import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, id, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`h-10 rounded border px-3 text-sm outline-none transition-colors focus:ring-2 ${
          error ? 'border-error focus:ring-error' : 'border-border focus:ring-primary'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}
