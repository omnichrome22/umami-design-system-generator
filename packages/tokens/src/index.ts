// Primitive color ramp — --color-{ramp}-{stop}
export const primitives = {
  'color-brand-50': '#eff6ff',
  'color-brand-100': '#dbeafe',
  'color-brand-200': '#bfdbfe',
  'color-brand-300': '#93c5fd',
  'color-brand-400': '#60a5fa',
  'color-brand-500': '#3b82f6',
  'color-brand-600': '#2563eb',
  'color-brand-700': '#1d4ed8',
  'color-brand-800': '#1e40af',
  'color-brand-900': '#1e3a8a',
  'color-neutral-0': '#ffffff',
  'color-neutral-50': '#f9fafb',
  'color-neutral-100': '#f3f4f6',
  'color-neutral-200': '#e5e7eb',
  'color-neutral-300': '#d1d5db',
  'color-neutral-400': '#9ca3af',
  'color-neutral-500': '#6b7280',
  'color-neutral-600': '#4b5563',
  'color-neutral-700': '#374151',
  'color-neutral-800': '#1f2937',
  'color-neutral-900': '#111827',
  'color-neutral-1000': '#000000',
} as const;

// Semantic tokens — --color-{role}-{variant} — reference primitives only
export const semantic = {
  'color-background-primary': 'var(--color-neutral-0)',
  'color-background-secondary': 'var(--color-neutral-50)',
  'color-background-brand': 'var(--color-brand-500)',
  'color-text-primary': 'var(--color-neutral-900)',
  'color-text-secondary': 'var(--color-neutral-500)',
  'color-text-on-brand': 'var(--color-neutral-0)',
  'color-border-subtle': 'var(--color-neutral-200)',
  'color-border-default': 'var(--color-neutral-300)',
  'color-interactive-default': 'var(--color-brand-500)',
  'color-interactive-hover': 'var(--color-brand-600)',
  'color-interactive-active': 'var(--color-brand-700)',
} as const;

// Spacing scale
export const spacing = {
  'space-1': '0.25rem',
  'space-2': '0.5rem',
  'space-3': '0.75rem',
  'space-4': '1rem',
  'space-6': '1.5rem',
  'space-8': '2rem',
  'space-12': '3rem',
  'space-16': '4rem',
} as const;

// Typography
export const typography = {
  'font-family-sans': 'system-ui, -apple-system, sans-serif',
  'font-family-mono': 'ui-monospace, monospace',
  'font-size-xs': '0.75rem',
  'font-size-sm': '0.875rem',
  'font-size-md': '1rem',
  'font-size-lg': '1.125rem',
  'font-size-xl': '1.25rem',
  'font-size-2xl': '1.5rem',
  'font-size-3xl': '1.875rem',
  'font-weight-regular': '400',
  'font-weight-medium': '500',
  'font-weight-semibold': '600',
  'font-weight-bold': '700',
  'line-height-tight': '1.25',
  'line-height-normal': '1.5',
  'line-height-relaxed': '1.75',
} as const;

// Radius
export const radius = {
  'radius-sm': '0.25rem',
  'radius-md': '0.375rem',
  'radius-lg': '0.5rem',
  'radius-xl': '0.75rem',
  'radius-full': '9999px',
} as const;

export type Primitives = typeof primitives;
export type Semantic = typeof semantic;
export type Spacing = typeof spacing;
export type Typography = typeof typography;
export type Radius = typeof radius;
