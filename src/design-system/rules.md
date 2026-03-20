# Design System Rules

## Principles
- **Consistency**: All visual values (color, spacing, type) come from `tokens.ts`. Never hardcode values.
- **Accessibility**: All interactive elements must meet WCAG AA contrast ratios.
- **Simplicity**: Prefer utility classes over custom CSS. Avoid one-off overrides.

## Colors
| Token         | Usage                                 |
|---------------|---------------------------------------|
| `primary`     | CTAs, links, active states            |
| `secondary`   | Supporting actions, accents           |
| `error`       | Validation errors, destructive states |
| `success`     | Confirmation, positive feedback       |
| `warning`     | Cautionary states                     |
| `foreground`  | Body text                             |
| `muted`       | Secondary / placeholder text          |
| `border`      | Dividers, outlines                    |
| `surface`     | Card and modal backgrounds            |
| `background`  | Page background                       |

## Typography
- Use `text-sm` for labels and captions
- Use `text-base` for body copy
- Use `text-lg` / `text-xl` for headings
- Font weight: `font-medium` for labels, `font-semibold` for headings

## Spacing
- Use multiples of 4 (Tailwind's default 4px grid)
- Prefer `gap-*` over `margin` within flex/grid layouts
- Section vertical padding: `py-12` (desktop), `py-8` (mobile)

## Component Rules
- Minimum touch target: 44×44px (use `min-h-11 min-w-11`)
- Focus states: always visible, use `focus:ring-2 focus:ring-primary`
- Disabled states: `opacity-50 pointer-events-none`
