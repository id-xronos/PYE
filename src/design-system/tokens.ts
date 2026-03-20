// Design System Tokens
// Single source of truth for all design values used across the app and Tailwind config.

export const colors = {
  primary: {
    DEFAULT: '#2563eb',
    dark: '#1d4ed8',
    light: '#60a5fa',
  },
  secondary: {
    DEFAULT: '#7c3aed',
    dark: '#6d28d9',
    light: '#a78bfa',
  },
  error: '#ef4444',
  success: '#22c55e',
  warning: '#f59e0b',
  foreground: '#111827',
  muted: '#6b7280',
  border: '#e5e7eb',
  surface: '#ffffff',
  background: '#f9fafb',
} as const;

export const spacing = {
  '18': '4.5rem',
  '22': '5.5rem',
  '30': '7.5rem',
} as const;

export const fontSizes = {
  '2xs': ['0.625rem', { lineHeight: '1rem' }],
} as const;

export const borderRadius = {
  DEFAULT: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
} as const;
